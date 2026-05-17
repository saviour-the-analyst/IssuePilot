import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GitBranch, Sparkles, Tags, Copy, CheckCircle, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitBranch className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">IssuePilot</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI-Powered Issue Management
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Triage GitHub Issues with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Automatically summarize, label, and organize your GitHub issues. 
            Save time and help contributors find the right tasks.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                <GitBranch className="h-5 w-5" />
                Connect GitHub
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage open-source issues efficiently
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AI Summarization</CardTitle>
              <CardDescription>
                Get concise summaries of complex issues with problem identification and affected areas
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Tags className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Smart Labels</CardTitle>
              <CardDescription>
                Automatically suggest relevant labels based on issue content and context
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Copy className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Duplicate Detection</CardTitle>
              <CardDescription>
                Identify similar issues to reduce redundancy and improve organization
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Task Breakdown</CardTitle>
              <CardDescription>
                Convert vague reports into structured tasks with clear acceptance criteria
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Contributor-Friendly</CardTitle>
              <CardDescription>
                Help new contributors find good first issues with difficulty ratings
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <GitBranch className="h-10 w-10 text-primary mb-2" />
              <CardTitle>GitHub Integration</CardTitle>
              <CardDescription>
                Seamlessly sync with your GitHub repositories and issues
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your workflow?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join maintainers who are saving hours every week with AI-powered issue triage
            </p>
            <Link href="/dashboard">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ for the open-source community</p>
          <p className="mt-2">
            <Link href="https://github.com" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            {' · '}
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            {' · '}
            <Link href="/contributing" className="hover:text-foreground transition-colors">
              Contributing
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
