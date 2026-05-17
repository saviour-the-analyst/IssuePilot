import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GitBranch, Star, AlertCircle } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface RepositoryCardProps {
  repository: {
    id: string
    name: string
    fullName: string
    description: string | null
    language: string | null
    stars: number
    lastSyncedAt: Date | null
    _count?: {
      issues: number
    }
  }
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Link href={`/dashboard/repositories/${repository.id}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg line-clamp-1">
                {repository.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {repository.fullName}
              </p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground flex-shrink-0">
              <Star className="h-4 w-4" />
              <span>{repository.stars}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {repository.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {repository.description}
            </p>
          )}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {repository.language && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <GitBranch className="h-3 w-3" />
                  {repository.language}
                </Badge>
              )}
              {repository._count && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {repository._count.issues} issues
                </Badge>
              )}
            </div>
            {repository.lastSyncedAt && (
              <p className="text-xs text-muted-foreground">
                Synced {formatDate(repository.lastSyncedAt)}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
