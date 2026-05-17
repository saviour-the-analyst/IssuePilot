import { Suspense } from 'react'
import { StatsCard } from '@/components/stats-card'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle, CheckCircle, GitBranch, TrendingUp } from 'lucide-react'

// TODO: Replace with actual data fetching
async function getDashboardStats() {
  return {
    totalIssues: 156,
    triagedIssues: 89,
    repositories: 12,
    avgTriageTime: '2.3s',
  }
}

export default async function DashboardPage() {
  const stats = await getDashboardStats()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your repositories and issue triage activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Total Issues"
          value={stats.totalIssues}
          description="Across all repositories"
          icon={AlertCircle}
        />
        <StatsCard
          title="Triaged Issues"
          value={stats.triagedIssues}
          description={`${Math.round((stats.triagedIssues / stats.totalIssues) * 100)}% completion`}
          icon={CheckCircle}
        />
        <StatsCard
          title="Repositories"
          value={stats.repositories}
          description="Connected to IssuePilot"
          icon={GitBranch}
        />
        <StatsCard
          title="Avg Triage Time"
          value={stats.avgTriageTime}
          description="Per issue"
          icon={TrendingUp}
        />
      </div>

      {/* Recent Activity */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <p className="text-muted-foreground">
              Connect a repository to start triaging issues
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
