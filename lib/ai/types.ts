export type AIProvider = 'openai' | 'anthropic' | 'local' | 'mock'

export interface AIConfig {
  provider: AIProvider
  apiKey?: string
  model?: string
  temperature?: number
}

export interface IssueSummary {
  summary: string
  problem: string
  affectedArea: string
  complexity: 'beginner' | 'intermediate' | 'advanced'
}

export interface LabelSuggestion {
  label: string
  confidence: number
  reason: string
}

export interface TaskBreakdown {
  summary: string
  reproductionSteps: string[]
  expectedBehavior: string
  possibleFiles: string[]
  acceptanceCriteria: string[]
}

export interface DuplicateCandidate {
  issueNumber: number
  issueTitle: string
  similarity: number
  reason: string
}
