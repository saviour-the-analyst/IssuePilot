import type { AIProvider } from './base'
import type {
  IssueSummary,
  LabelSuggestion,
  TaskBreakdown,
  DuplicateCandidate,
} from '../types'

/**
 * Mock AI Provider
 * 
 * Returns realistic mock data for development and testing.
 * Used when no API key is configured.
 */
export class MockAIProvider implements AIProvider {
  async summarizeIssue(title: string, body: string): Promise<IssueSummary> {
    // Simulate API delay
    await this.delay(500)

    const hasError = title.toLowerCase().includes('error') || 
                     title.toLowerCase().includes('bug')
    
    return {
      summary: `Issue regarding ${title.toLowerCase().slice(0, 50)}...`,
      problem: hasError 
        ? 'User encounters an error when performing the described action'
        : 'Feature request or enhancement to improve functionality',
      affectedArea: this.guessArea(title, body),
      complexity: this.guessComplexity(title, body),
    }
  }

  async suggestLabels(title: string, body: string): Promise<LabelSuggestion[]> {
    await this.delay(400)

    const labels: LabelSuggestion[] = []
    const text = `${title} ${body}`.toLowerCase()

    if (text.includes('bug') || text.includes('error') || text.includes('broken')) {
      labels.push({
        label: 'bug',
        confidence: 0.9,
        reason: 'Issue describes unexpected behavior or errors',
      })
    }

    if (text.includes('feature') || text.includes('add') || text.includes('support')) {
      labels.push({
        label: 'enhancement',
        confidence: 0.85,
        reason: 'Issue requests new functionality',
      })
    }

    if (text.includes('doc') || text.includes('readme') || text.includes('guide')) {
      labels.push({
        label: 'documentation',
        confidence: 0.8,
        reason: 'Issue relates to documentation',
      })
    }

    if (text.includes('frontend') || text.includes('ui') || text.includes('button')) {
      labels.push({
        label: 'frontend',
        confidence: 0.75,
        reason: 'Issue affects frontend components',
      })
    }

    if (text.includes('api') || text.includes('backend') || text.includes('server')) {
      labels.push({
        label: 'backend',
        confidence: 0.75,
        reason: 'Issue affects backend services',
      })
    }

    if (text.includes('simple') || text.includes('easy') || text.includes('typo')) {
      labels.push({
        label: 'good first issue',
        confidence: 0.7,
        reason: 'Issue appears straightforward for new contributors',
      })
    }

    return labels.length > 0 ? labels : [
      {
        label: 'needs triage',
        confidence: 0.6,
        reason: 'Unable to automatically categorize',
      },
    ]
  }

  async detectDuplicates(
    newTitle: string,
    newBody: string,
    existingIssues: Array<{ number: number; title: string; body: string }>
  ): Promise<DuplicateCandidate[]> {
    await this.delay(600)

    const duplicates: DuplicateCandidate[] = []
    const newText = `${newTitle} ${newBody}`.toLowerCase()

    for (const existing of existingIssues.slice(0, 5)) {
      const existingText = `${existing.title} ${existing.body}`.toLowerCase()
      const similarity = this.calculateSimilarity(newText, existingText)

      if (similarity > 0.6) {
        duplicates.push({
          issueNumber: existing.number,
          issueTitle: existing.title,
          similarity,
          reason: similarity > 0.8
            ? 'Very similar title and description'
            : 'Similar keywords and context',
        })
      }
    }

    return duplicates.sort((a, b) => b.similarity - a.similarity)
  }

  async breakdownTask(title: string, body: string): Promise<TaskBreakdown> {
    await this.delay(500)

    const isBug = title.toLowerCase().includes('bug') || 
                  title.toLowerCase().includes('error')

    return {
      summary: `${isBug ? 'Fix' : 'Implement'} ${title}`,
      reproductionSteps: isBug
        ? [
            'Navigate to the affected page/component',
            'Perform the action described in the issue',
            'Observe the error or unexpected behavior',
          ]
        : [
            'Review the current implementation',
            'Identify where changes need to be made',
          ],
      expectedBehavior: isBug
        ? 'The feature should work as intended without errors'
        : 'The new functionality should be implemented as described',
      possibleFiles: this.guessPossibleFiles(title, body),
      acceptanceCriteria: [
        'Code changes are implemented and tested',
        'No new errors or warnings are introduced',
        isBug ? 'The reported issue is resolved' : 'Feature works as expected',
        'Documentation is updated if necessary',
      ],
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  private guessArea(title: string, body: string): string {
    const text = `${title} ${body}`.toLowerCase()
    
    if (text.includes('auth') || text.includes('login')) return 'authentication'
    if (text.includes('ui') || text.includes('button') || text.includes('frontend')) return 'frontend'
    if (text.includes('api') || text.includes('backend')) return 'backend/api'
    if (text.includes('database') || text.includes('db')) return 'database'
    if (text.includes('doc')) return 'documentation'
    
    return 'general'
  }

  private guessComplexity(title: string, body: string): 'beginner' | 'intermediate' | 'advanced' {
    const text = `${title} ${body}`.toLowerCase()
    
    if (text.includes('typo') || text.includes('simple') || text.includes('easy')) {
      return 'beginner'
    }
    
    if (text.includes('refactor') || text.includes('architecture') || text.includes('performance')) {
      return 'advanced'
    }
    
    return 'intermediate'
  }

  private guessPossibleFiles(title: string, body: string): string[] {
    const text = `${title} ${body}`.toLowerCase()
    const files: string[] = []

    if (text.includes('auth') || text.includes('login')) {
      files.push('lib/auth.ts', 'app/login/page.tsx')
    }
    if (text.includes('api')) {
      files.push('app/api/*/route.ts')
    }
    if (text.includes('ui') || text.includes('component')) {
      files.push('components/*.tsx')
    }
    if (text.includes('database')) {
      files.push('prisma/schema.prisma', 'lib/db.ts')
    }

    return files.length > 0 ? files : ['(files to be determined)']
  }

  private calculateSimilarity(text1: string, text2: string): number {
    const words1 = new Set(text1.split(/\s+/))
    const words2 = new Set(text2.split(/\s+/))
    
    const intersection = new Set([...words1].filter(x => words2.has(x)))
    const union = new Set([...words1, ...words2])
    
    return intersection.size / union.size
  }
}
