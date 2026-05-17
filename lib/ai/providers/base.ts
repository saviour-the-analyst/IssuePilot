import type {
  IssueSummary,
  LabelSuggestion,
  TaskBreakdown,
  DuplicateCandidate,
} from '../types'

/**
 * Base AI Provider Interface
 * 
 * All AI providers must implement this interface to ensure consistency
 * across different AI backends (OpenAI, Anthropic, local models, etc.)
 */
export interface AIProvider {
  summarizeIssue(title: string, body: string): Promise<IssueSummary>
  suggestLabels(title: string, body: string): Promise<LabelSuggestion[]>
  detectDuplicates(
    newTitle: string,
    newBody: string,
    existingIssues: Array<{ number: number; title: string; body: string }>
  ): Promise<DuplicateCandidate[]>
  breakdownTask(title: string, body: string): Promise<TaskBreakdown>
}
