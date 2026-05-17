/**
 * GitHub API Client
 * 
 * Handles all interactions with the GitHub REST API
 */

export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    avatar_url: string
  }
  description: string | null
  html_url: string
  private: boolean
  language: string | null
  stargazers_count: number
  updated_at: string
}

export interface GitHubIssue {
  id: number
  number: number
  title: string
  body: string | null
  state: string
  user: {
    login: string
    avatar_url: string
  }
  html_url: string
  created_at: string
  updated_at: string
  closed_at: string | null
  labels: Array<{
    name: string
    color: string
  }>
}

export class GitHubClient {
  private token: string
  private baseUrl = 'https://api.github.com'

  constructor(token: string) {
    this.token = token
  }

  private async fetch<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    return response.json()
  }

  async getUserRepositories(): Promise<GitHubRepository[]> {
    return this.fetch<GitHubRepository[]>('/user/repos?sort=updated&per_page=100')
  }

  async getRepository(owner: string, repo: string): Promise<GitHubRepository> {
    return this.fetch<GitHubRepository>(`/repos/${owner}/${repo}`)
  }

  async getIssues(owner: string, repo: string, state: 'open' | 'closed' | 'all' = 'open'): Promise<GitHubIssue[]> {
    return this.fetch<GitHubIssue[]>(`/repos/${owner}/${repo}/issues?state=${state}&per_page=100`)
  }

  async getIssue(owner: string, repo: string, issueNumber: number): Promise<GitHubIssue> {
    return this.fetch<GitHubIssue>(`/repos/${owner}/${repo}/issues/${issueNumber}`)
  }
}

/**
 * Create a GitHub client instance
 */
export function createGitHubClient(token: string): GitHubClient {
  return new GitHubClient(token)
}
