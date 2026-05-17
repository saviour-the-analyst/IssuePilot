import type { AIProvider as IAIProvider } from './providers/base'
import { MockAIProvider } from './providers/mock'
import { OpenAIProvider } from './providers/openai'
import type { AIConfig } from './types'

/**
 * AI Service Factory
 * 
 * Creates the appropriate AI provider based on configuration.
 * Falls back to mock provider if no API key is configured.
 */
export function createAIProvider(config?: AIConfig): IAIProvider {
  const provider = config?.provider || process.env.AI_PROVIDER || 'mock'
  const apiKey = config?.apiKey || process.env.OPENAI_API_KEY

  switch (provider) {
    case 'openai':
      if (!apiKey) {
        console.warn('OpenAI API key not found. Falling back to mock provider.')
        return new MockAIProvider()
      }
      return new OpenAIProvider(apiKey, config?.model)

    case 'anthropic':
      // TODO: Implement Anthropic provider
      console.warn('Anthropic provider not yet implemented. Using mock provider.')
      return new MockAIProvider()

    case 'local':
      // TODO: Implement local model provider
      console.warn('Local provider not yet implemented. Using mock provider.')
      return new MockAIProvider()

    case 'mock':
    default:
      return new MockAIProvider()
  }
}

// Export a singleton instance
export const aiProvider = createAIProvider()

// Re-export types
export type * from './types'
export type { AIProvider } from './providers/base'
