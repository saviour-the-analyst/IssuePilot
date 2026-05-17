import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/empty-state'
import { RepositoryCard } from '@/components/repository-card'
import { FolderGit2, Plus } from 'lucide-react'

// TODO: Replace with actual data fetching
async function getRepositories() {
  // Mock data for demonstration
  return [
    {
      id: '1',
      name: 'issuepilot',
      fullName: 'yourusername/issuepilot',
      description: 'AI-powered GitHub issue triage assistant',
      language: 'TypeScript',
      stars: 42,
      lastSyncedAt: new Date(),
      _count: {
        issues: 23,
      },
    },
  ]
}

export default async function RepositoriesPage() {
  const repositories = await getRepositories()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Repositories</h1>
          <p className="text-muted-foreground">
            Manage your connected GitHub repositories
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Repository
        </Button>
      </div>

      {repositories.length === 0 ? (
        <EmptyState
          icon={FolderGit2}
          title="No repositories connected"
          description="Connect your first GitHub repository to start triaging issues with AI"
          action={{
            label: 'Connect Repository',
            onClick: () => console.log('Connect repository'),
          }}
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo) => (
            <RepositoryCard key={repo.id} repository={repo} />
          ))}
        </div>
      )}
    </div>
  )
}
