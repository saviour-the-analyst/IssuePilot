import { Button } from '@/components/ui/button'
import { IssueCard } from '@/components/issue-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { RefreshCw, Settings } from 'lucide-react'

// TODO: Replace with actual data fetching
async function getRepository(id: string) {
  return {
    id,
    name: 'issuepilot',
    fullName: 'yourusername/issuepilot',
    description: 'AI-powered GitHub issue triage assistant',
    language: 'TypeScript',
    stars: 42,
  }
}

async function getIssues(repositoryId: string) {
  // Mock data
  return [
    {
      id: '1',
      number: 42,
      title: 'Add support for custom AI providers',
      state: 'open',
      author: 'contributor1',
      createdAt: new Date(Date.now() - 86400000 * 2),
      labels: ['enhancement', 'good first issue'],
      triageResult: {
        complexity: 'intermediate',
        affectedArea: 'backend/ai',
      },
    },
    {
      id: '2',
      number: 41,
      title: 'Fix: Dashboard stats not updating',
      state: 'open',
      author: 'contributor2',
      createdAt: new Date(Date.now() - 86400000 * 5),
      labels: ['bug', 'frontend'],
      triageResult: {
        complexity: 'beginner',
        affectedArea: 'frontend/dashboard',
      },
    },
  ]
}

export default async function RepositoryDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const repository = await getRepository(params.id)
  const issues = await getIssues(params.id)

  const openIssues = issues.filter((i) => i.state === 'open')
  const triagedIssues = issues.filter((i) => i.triageResult)

  return (
    <div>
      {/* Repository Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{repository.name}</h1>
            <p className="text-muted-foreground">{repository.fullName}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Sync Issues
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
        {repository.description && (
          <p className="text-muted-foreground mb-4">{repository.description}</p>
        )}
        <div className="flex gap-4">
          <Badge variant="secondary">{repository.language}</Badge>
          <Badge variant="outline">{repository.stars} stars</Badge>
          <Badge variant="outline">{openIssues.length} open issues</Badge>
          <Badge variant="outline">{triagedIssues.length} triaged</Badge>
        </div>
      </div>

      {/* Issues Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Issues ({issues.length})</TabsTrigger>
          <TabsTrigger value="triaged">Triaged ({triagedIssues.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({issues.length - triagedIssues.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} repositoryId={params.id} />
          ))}
        </TabsContent>

        <TabsContent value="triaged" className="space-y-4">
          {triagedIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} repositoryId={params.id} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {issues
            .filter((i) => !i.triageResult)
            .map((issue) => (
              <IssueCard key={issue.id} issue={issue} repositoryId={params.id} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
