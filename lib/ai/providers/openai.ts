import type { AIProvider } from './base'
import type {
  IssueSummary,
  LabelSuggestion,
  TaskBreakdown,
  DuplicateCandidate,
} from '../types'
import {
  SUMMARIZE_ISSUE_PROMPT,
  SUGGEST_LABELS_PROMPT,
  DETECT_DUPLICATES_PROMPT,
  BREAKDOWN_TASK_PROMPT,
} from '../prompts'

/**
 * OpenAI Provider
 * 
 * TODO: Implement actual OpenAI API calls
 * For now, this is a placeholder that contributors can implement
 */
export class OpenAIProvider implements AIProvider {
  private apiKey: string
  private model: string

  constructor(apiKey: string, model = 'gpt-4-turbo-preview') {
    this.apiKey = apiKey
    this.model = model
  }

  async summarizeIssue(title: string, body: string): Promise<IssueSummary> {
    const prompt = SUMMARIZE_ISSUE_PROMPT
      .replace('{title}', title)
      .replace('{body}', body || 'No description provided')

    // TODO: Implement OpenAI API call
    // const response = await this.callOpenAI(prompt)
    // return JSON.parse(response)

    throw new Error('OpenAI provider not yet implemented. Use mock provider for now.')
  }

  async suggestLabels(title: string, body: string): Promise<LabelSuggestion[]> {
    const prompt = SUGGEST_LABELS_PROMPT
      .replace('{title}', title)
      .replace('{body}', body || 'No description provided')

    // TODO: Implement OpenAI API call
    throw new Error('OpenAI provider not yet implemented. Use mock provider for now.')
  }

  async detectDuplicates(
    newTitle: string,
    newBody: string,
    existingIssues: Array<{ number: number; title: string; body: string }>
  ): Promise<DuplicateCandidate[]> {
    const issuesText = existingIssues
      .map(i => `#${i.number}: ${i.title}\n${i.body?.slice(0, 200)}...`)
      .join('\n\n')

    const prompt = DETECT_DUPLICATES_PROMPT
      .replace('{newTitle}', newTitle)
      .replace('{newBody}', newBody || 'No description provided')
      .replace('{existingIssues}', issuesText)

    // TODO: Implement OpenAI API call
    throw new Error('OpenAI provider not yet implemented. Use mock provider for now.')
  }

  async breakdownTask(title: string, body: string): Promise<TaskBreakdown> {
    const prompt = BREAKDOWN_TASK_PROMPT
      .replace('{title}', title)
      .replace('{body}', body || 'No description provided')

    // TODO: Implement OpenAI API call
    throw new Error('OpenAI provider not yet implemented. Use mock provider for now.')
  }

  // TODO: Implement this helper method
  // private async callOpenAI(prompt: string): Promise<string> {
  //   const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${this.apiKey}`,
  //     },
  //     body: JSON.stringify({
  //       model: this.model,
  //       messages: [{ role: 'user', content: prompt }],
  //       temperature: 0.7,
  //     }),
  //   })
  //   const data = await response.json()
  //   return data.choices[0].message.content
  // }
}
