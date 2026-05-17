# 🚀 IssuePilot

<div align="center">

**AI-Powered GitHub Issue Triage Assistant for Open-Source Maintainers**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Documentation](#-documentation) • [Contributing](#-contributing) • [Roadmap](#-roadmap)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Usage Guide](#-usage-guide)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Community](#-community)
- [License](#-license)

---

## 🌟 Overview

**IssuePilot** is an intelligent GitHub issue management platform that leverages AI to help open-source maintainers efficiently triage, categorize, and structure issues. By automating repetitive tasks and providing intelligent insights, IssuePilot reduces maintainer workload while improving contributor experience.

### 🎯 The Problem

Open-source maintainers face several challenges:

- **Issue Overload**: Popular repositories receive hundreds of issues weekly
- **Vague Bug Reports**: Contributors often submit incomplete or unclear issues
- **Manual Categorization**: Maintainers spend hours labeling and organizing issues
- **Duplicate Issues**: Similar issues get reported multiple times
- **Contributor Friction**: New contributors struggle with unclear issue descriptions
- **Burnout**: Repetitive triage work leads to maintainer fatigue

### 💡 The Solution

IssuePilot automates the issue triage workflow:

1. **Connects** to your GitHub repositories
2. **Analyzes** issues using AI to understand context and intent
3. **Summarizes** complex issues into clear, actionable descriptions
4. **Suggests** appropriate labels based on content analysis
5. **Detects** duplicate or similar existing issues
6. **Structures** vague bug reports into contributor-friendly tasks
7. **Estimates** issue complexity for better contributor matching

---

## ✨ Features

### 🔗 GitHub Repository Integration

- **Multi-Repository Support**: Manage multiple repositories from a single dashboard
- **Real-Time Sync**: Automatic synchronization with GitHub issues
- **Secure Authentication**: OAuth integration with GitHub
- **Webhook Support**: Real-time updates when issues are created or modified

### 🤖 AI-Powered Issue Analysis

- **Intelligent Summarization**: Generate concise, accurate issue summaries
- **Context Extraction**: Identify the core problem, affected components, and user impact
- **Complexity Estimation**: Classify issues as beginner, intermediate, or advanced
- **Sentiment Analysis**: Understand issue urgency and tone

### 🏷️ Smart Label Suggestions

Automatically suggest relevant labels:
- `bug` - Code defects and errors
- `enhancement` - Feature requests and improvements
- `documentation` - Documentation updates
- `testing` - Test coverage and quality
- `frontend` / `backend` - Component categorization
- `good first issue` - Beginner-friendly tasks
- `help wanted` - Issues seeking contributors

### 🔍 Duplicate Detection

- **Semantic Similarity**: Compare issue content using AI embeddings
- **Title Matching**: Identify similar issue titles
- **Historical Analysis**: Check against closed issues
- **Confidence Scoring**: Rank duplicate candidates by similarity

### 📋 Contributor-Friendly Task Breakdown

Transform vague issues into structured tasks:

```markdown
## Problem Summary
Clear description of the issue

## Reproduction Steps
1. Step-by-step instructions
2. Expected vs actual behavior

## Affected Components
- File paths and modules involved

## Acceptance Criteria
- [ ] Specific, testable requirements
- [ ] Definition of done

## Suggested Approach
Technical guidance for implementation
```

### 📊 Comprehensive Dashboard

- **Repository Overview**: Statistics, health metrics, and activity trends
- **Issue Pipeline**: Visualize triaged, pending, and contributor-ready issues
- **Duplicate Candidates**: Review and merge similar issues
- **Label Distribution**: Understand issue categorization patterns
- **Contributor Insights**: Track good first issues and help wanted tags

---

## 🎬 Demo

### Screenshots

> **Note**: Add screenshots here after deployment

**Landing Page**
![Landing Page Placeholder](https://via.placeholder.com/800x400?text=Landing+Page+Coming+Soon)

**Dashboard Overview**
![Dashboard Placeholder](https://via.placeholder.com/800x400?text=Dashboard+Coming+Soon)

**Issue Triage View**
![Triage View Placeholder](https://via.placeholder.com/800x400?text=Triage+View+Coming+Soon)

### Live Demo

🔗 **[Try IssuePilot Live](https://issuepilot.vercel.app)** *(Coming Soon)*

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components

### Backend
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Serverless API endpoints
- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database access
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database

### AI & Integration
- **[OpenAI API](https://openai.com/api/)** - GPT-4 for issue analysis
- **[GitHub REST API](https://docs.github.com/en/rest)** - Repository integration
- **AI Abstraction Layer** - Pluggable AI provider system

### Deployment
- **[Vercel](https://vercel.com/)** - Serverless deployment platform
- **[Supabase](https://supabase.com/)** - PostgreSQL hosting (optional)

---

## 🏗️ Architecture

### System Design

```
┌─────────────────────────────────────────────────────────────┐
│                        IssuePilot                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐      ┌──────────────┐                   │
│  │   Next.js    │◄────►│   Prisma     │                   │
│  │  App Router  │      │     ORM      │                   │
│  └──────┬───────┘      └──────┬───────┘                   │
│         │                     │                            │
│         ▼                     ▼                            │
│  ┌──────────────┐      ┌──────────────┐                   │
│  │  UI Layer    │      │  PostgreSQL  │                   │
│  │  (shadcn/ui) │      │   Database   │                   │
│  └──────────────┘      └──────────────┘                   │
│                                                             │
│  ┌─────────────────────────────────────────────┐          │
│  │         Service Layer                        │          │
│  ├─────────────────────────────────────────────┤          │
│  │  • Triage Service                           │          │
│  │  • GitHub Client                            │          │
│  │  • AI Service (Abstraction)                 │          │
│  └─────────────────────────────────────────────┘          │
│                                                             │
│  ┌─────────────────────────────────────────────┐          │
│  │         AI Provider Layer                    │          │
│  ├─────────────────────────────────────────────┤          │
│  │  • OpenAI Provider                          │          │
│  │  • Mock Provider (Development)              │          │
│  │  • Custom Provider (Extensible)             │          │
│  └─────────────────────────────────────────────┘          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
         │                                    │
         ▼                                    ▼
  ┌──────────────┐                    ┌──────────────┐
  │   GitHub     │                    │   OpenAI     │
  │     API      │                    │     API      │
  └──────────────┘                    └──────────────┘
```

### Key Design Principles

1. **Modular Architecture**: Clean separation of concerns with service layers
2. **AI Abstraction**: Pluggable AI providers for flexibility
3. **Type Safety**: Full TypeScript coverage with strict mode
4. **Scalability**: Serverless architecture for automatic scaling
5. **Extensibility**: Easy to add new features and integrations

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **PostgreSQL** 14+ database ([Download](https://www.postgresql.org/download/))
- **GitHub Account** with repository access
- **OpenAI API Key** (optional - mock mode available)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/saviour-the-analyst/IssuePilot.git
cd IssuePilot
```

#### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

#### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/issuepilot"

# GitHub Integration
GITHUB_TOKEN="ghp_your_github_personal_access_token"
GITHUB_CLIENT_ID="your_github_oauth_client_id"
GITHUB_CLIENT_SECRET="your_github_oauth_client_secret"

# AI Provider (Optional - uses mock if not provided)
OPENAI_API_KEY="sk-your_openai_api_key"
AI_PROVIDER="openai" # or "mock" for development

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

#### 4. Set Up the Database

Generate Prisma client and create database schema:

```bash
npx prisma generate
npx prisma db push
```

Optional: Seed with sample data:

```bash
npx prisma db seed
```

#### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🔑 Getting API Keys

#### GitHub Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `read:user`, `user:email`
4. Copy the generated token to `GITHUB_TOKEN` in `.env`

#### OpenAI API Key (Optional)

1. Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy to `OPENAI_API_KEY` in `.env`

> **Note**: If you don't provide an OpenAI key, IssuePilot will use mock AI responses for development.

---

## 📁 Project Structure

```
IssuePilot/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Authentication routes
│   ├── dashboard/               # Dashboard pages
│   │   ├── page.tsx            # Main dashboard
│   │   ├── repositories/       # Repository management
│   │   │   ├── page.tsx        # Repository list
│   │   │   └── [id]/           # Repository detail
│   │   │       ├── page.tsx    # Repository overview
│   │   │       └── issues/     # Issue management
│   │   │           └── [issueId]/
│   │   │               └── page.tsx  # Issue detail
│   │   └── settings/           # Settings pages
│   ├── api/                    # API routes
│   │   ├── github/            # GitHub integration endpoints
│   │   ├── triage/            # Triage endpoints
│   │   └── webhooks/          # GitHub webhooks
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Landing page
│
├── components/                 # React components
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── issue-card.tsx         # Issue display component
│   ├── repository-card.tsx    # Repository card
│   ├── stats-card.tsx         # Statistics card
│   └── empty-state.tsx        # Empty state component
│
├── lib/                       # Core library code
│   ├── ai/                   # AI service layer
│   │   ├── index.ts          # AI service interface
│   │   ├── types.ts          # Type definitions
│   │   ├── prompts.ts        # Prompt templates
│   │   └── providers/        # AI provider implementations
│   │       ├── base.ts       # Base provider interface
│   │       ├── openai.ts     # OpenAI implementation
│   │       └── mock.ts       # Mock provider
│   │
│   ├── github/               # GitHub integration
│   │   └── client.ts         # GitHub API client
│   │
│   ├── services/             # Business logic services
│   │   └── triage.ts         # Issue triage service
│   │
│   ├── db.ts                 # Database client
│   └── utils.ts              # Utility functions
│
├── prisma/                    # Database schema
│   ├── schema.prisma         # Prisma schema definition
│   └── seed.ts               # Database seeding script
│
├── public/                    # Static assets
│   ├── images/
│   └── icons/
│
├── docs/                      # Documentation
│   ├── API.md                # API documentation
│   ├── ARCHITECTURE.md       # Architecture guide
│   └── DEPLOYMENT.md         # Deployment guide
│
├── .github/                   # GitHub configuration
│   ├── workflows/            # GitHub Actions
│   ├── ISSUE_TEMPLATE/       # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
│
├── CONTRIBUTING.md           # Contribution guidelines
├── CODE_OF_CONDUCT.md        # Code of conduct
├── ROADMAP.md                # Project roadmap
├── LICENSE                   # MIT License
└── README.md                 # This file
```

---

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Description | Default |
|----------|----------|-------------|---------|
| `DATABASE_URL` | Yes | PostgreSQL connection string | - |
| `GITHUB_TOKEN` | Yes | GitHub personal access token | - |
| `GITHUB_CLIENT_ID` | No | GitHub OAuth client ID | - |
| `GITHUB_CLIENT_SECRET` | No | GitHub OAuth secret | - |
| `OPENAI_API_KEY` | No | OpenAI API key | Uses mock |
| `AI_PROVIDER` | No | AI provider (`openai` or `mock`) | `mock` |
| `NEXT_PUBLIC_APP_URL` | Yes | Application URL | `http://localhost:3000` |

### AI Provider Configuration

IssuePilot supports multiple AI providers through an abstraction layer:

```typescript
// lib/ai/index.ts
import { OpenAIProvider } from './providers/openai';
import { MockProvider } from './providers/mock';

const provider = process.env.AI_PROVIDER === 'openai' 
  ? new OpenAIProvider()
  : new MockProvider();
```

To add a custom provider, implement the `AIProvider` interface:

```typescript
interface AIProvider {
  summarizeIssue(issue: Issue): Promise<string>;
  suggestLabels(issue: Issue): Promise<string[]>;
  detectDuplicates(issue: Issue, existing: Issue[]): Promise<DuplicateMatch[]>;
  estimateComplexity(issue: Issue): Promise<'beginner' | 'intermediate' | 'advanced'>;
}
```

---

## 📚 Usage Guide

### Connecting a Repository

1. Navigate to the Dashboard
2. Click "Add Repository"
3. Authorize GitHub access (if first time)
4. Select repositories to connect
5. Click "Connect"

### Triaging Issues

1. Go to Repository → Issues
2. Select an untriaged issue
3. Review AI-generated summary and suggestions
4. Approve or modify labels
5. Check for duplicates
6. Mark as "Triaged"

### Viewing Analytics

1. Navigate to Dashboard
2. View repository statistics:
   - Total issues
   - Triaged vs pending
   - Label distribution
   - Contributor-ready issues

---

## 🔌 API Documentation

### REST API Endpoints

#### Repositories

```http
GET    /api/repositories          # List all repositories
POST   /api/repositories          # Add a repository
GET    /api/repositories/:id      # Get repository details
DELETE /api/repositories/:id      # Remove repository
```

#### Issues

```http
GET    /api/repositories/:id/issues           # List issues
GET    /api/repositories/:id/issues/:issueId  # Get issue details
POST   /api/repositories/:id/issues/:issueId/triage  # Triage issue
```

#### Triage

```http
POST   /api/triage/summarize      # Summarize an issue
POST   /api/triage/labels          # Suggest labels
POST   /api/triage/duplicates      # Detect duplicates
POST   /api/triage/complexity      # Estimate complexity
```

For detailed API documentation, see [docs/API.md](docs/API.md).

---

## 🤝 Contributing

We welcome contributions from the community! IssuePilot is designed to be contributor-friendly.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Run tests**: `npm test`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Contribution Areas

- 🎨 **Frontend**: UI/UX improvements, new components
- ⚙️ **Backend**: API endpoints, service layer enhancements
- 🤖 **AI**: Prompt engineering, new AI providers
- 🔗 **Integrations**: GitHub features, webhooks
- 📝 **Documentation**: Guides, tutorials, API docs
- 🧪 **Testing**: Unit tests, integration tests
- 🐛 **Bug Fixes**: Issue resolution

### Good First Issues

Look for issues labeled [`good first issue`](https://github.com/saviour-the-analyst/IssuePilot/labels/good%20first%20issue) to get started.

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Follow the existing code style

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 🗺️ Roadmap

### MVP (Current)
- [x] GitHub repository integration
- [x] AI issue summarization
- [x] Label suggestions
- [x] Duplicate detection
- [x] Basic dashboard
- [x] Mock AI provider

### Phase 2 (Q2 2026)
- [ ] GitHub OAuth authentication
- [ ] Webhook support for real-time updates
- [ ] Advanced duplicate detection with embeddings
- [ ] Issue priority scoring
- [ ] Bulk triage operations
- [ ] Export triage reports

### Phase 3 (Q3 2026)
- [ ] Multi-language support
- [ ] Custom label taxonomies
- [ ] Team collaboration features
- [ ] Analytics and insights dashboard
- [ ] Browser extension
- [ ] Slack/Discord integration

### Phase 4 (Q4 2026)
- [ ] Local AI model support (Llama, Mistral)
- [ ] Custom prompt templates
- [ ] Issue templates generation
- [ ] Automated issue routing
- [ ] Contributor matching
- [ ] API rate limiting and caching

For the complete roadmap, see [ROADMAP.md](ROADMAP.md).

---

## 👥 Community

### Get Involved

- 💬 **Discussions**: [GitHub Discussions](https://github.com/saviour-the-analyst/IssuePilot/discussions)
- 🐛 **Bug Reports**: [Issue Tracker](https://github.com/saviour-the-analyst/IssuePilot/issues)
- 💡 **Feature Requests**: [Feature Requests](https://github.com/saviour-the-analyst/IssuePilot/issues/new?template=feature_request.md)
- 📧 **Email**: support@issuepilot.dev

### Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please read our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📄 License

IssuePilot is open-source software licensed under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2026 IssuePilot Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful component library
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[OpenAI](https://openai.com/)** - AI capabilities
- **Open-Source Community** - For inspiration and support

---

## 📞 Support

Need help? We're here for you:

- 📖 **Documentation**: [docs/](docs/)
- 💬 **Community Forum**: [GitHub Discussions](https://github.com/saviour-the-analyst/IssuePilot/discussions)
- 🐛 **Bug Reports**: [Issue Tracker](https://github.com/saviour-the-analyst/IssuePilot/issues)
- 📧 **Email**: support@issuepilot.dev

---

<div align="center">

**Built with ❤️ for the open-source community**

[⬆ Back to Top](#-issuepilot)

</div>
