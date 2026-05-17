import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { timeAgo } from '@/lib/utils'
import { GitPullRequest, MessageSquare } from 'lucide-react'

interface IssueCardProps {
  issue: {
    id: string
    number: number
    title: string
    state: string
    author: string
    createdAt: Date
    labels: string[]
    triageResult?: {
      complexity: string
      affectedArea: string | null
    } | null
  }
  repositoryId: string
}

export function IssueCard({ issue, repositoryId }: IssueCardProps) {
  const complexityColors = {
    beginner: 'bg-green-100 text-green-800 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    advanced: 'bg-red-100 text-red-800 border-red-200',
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={`/dashboard/repositories/${repositoryId}/issues/${issue.id}`}
            className="flex-1 group"
          >
            <div className="flex items-start gap-2">
              <GitPullRequest className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {issue.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  #{issue.number} opened {timeAgo(issue.createdAt)} by {issue.author}
                </p>
              </div>
            </div>
          </Link>
          <Badge
            variant={issue.state === 'open' ? 'default' : 'secondary'}
            className="flex-shrink-0"
          >
            {issue.state}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {issue.triageResult && (
            <>
              <Badge
                variant="outline"
                className={complexityColors[issue.triageResult.complexity as keyof typeof complexityColors]}
              >
                {issue.triageResult.complexity}
              </Badge>
              {issue.triageResult.affectedArea && (
                <Badge variant="outline">
                  {issue.triageResult.affectedArea}
                </Badge>
              )}
            </>
          )}
          {issue.labels.slice(0, 3).map((label) => (
            <Badge key={label} variant="secondary">
              {label}
            </Badge>
          ))}
          {issue.labels.length > 3 && (
            <Badge variant="secondary">+{issue.labels.length - 3}</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
