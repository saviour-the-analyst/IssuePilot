# Contributing to IssuePilot

Thank you for your interest in contributing to IssuePilot! We welcome contributions from the community and are excited to have you join us.

## 🌟 Ways to Contribute

- 🐛 **Bug Reports**: Report bugs through GitHub Issues
- ✨ **Feature Requests**: Suggest new features or improvements
- 📝 **Documentation**: Improve or add documentation
- 💻 **Code**: Submit bug fixes or new features
- 🎨 **Design**: Improve UI/UX
- 🧪 **Testing**: Write tests or improve test coverage

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- PostgreSQL 14+
- Git
- GitHub account

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/IssuePilot.git
   cd IssuePilot
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/saviour-the-analyst/IssuePilot.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

6. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

7. **Run the development server**
   ```bash
   npm run dev
   ```

## 📋 Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Test additions or changes
- `chore/` - Maintenance tasks

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Run type check
npm run type-check

# Run tests (when available)
npm test
```

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat: add new feature"
# or
git commit -m "fix: resolve bug in component"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Maintenance tasks

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Submit the PR

## 📝 Pull Request Guidelines

### PR Title

Use the same format as commit messages:
```
feat: add AI provider abstraction
fix: resolve issue card rendering bug
docs: update installation instructions
```

### PR Description

Include:
- **What**: Brief description of changes
- **Why**: Reason for the changes
- **How**: Technical approach (if complex)
- **Testing**: How you tested the changes
- **Screenshots**: For UI changes
- **Related Issues**: Link to related issues

### PR Checklist

Before submitting, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated (when applicable)
- [ ] All tests pass
- [ ] PR title follows conventional commits
- [ ] PR description is complete

## 🎯 Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Define proper types (avoid `any`)
- Use interfaces for object shapes
- Export types when needed

```typescript
// Good
interface User {
  id: string
  name: string
  email: string
}

function getUser(id: string): Promise<User> {
  // ...
}

// Avoid
function getUser(id: any): any {
  // ...
}
```

### React Components

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop types

```typescript
// Good
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={variant}>
      {label}
    </button>
  )
}
```

### File Organization

```
component-name/
├── index.ts          # Export
├── component.tsx     # Component
├── types.ts          # Types
└── utils.ts          # Utilities
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`)
- **Types/Interfaces**: PascalCase (`UserData`)

## 🧪 Testing Guidelines

### Unit Tests

- Test individual functions and components
- Mock external dependencies
- Aim for high coverage on critical paths

### Integration Tests

- Test feature workflows
- Test API endpoints
- Test database interactions

### E2E Tests

- Test critical user journeys
- Test across different browsers

## 📚 Documentation

### Code Comments

- Explain **why**, not **what**
- Document complex algorithms
- Add JSDoc for public APIs

```typescript
/**
 * Analyzes an issue and generates AI-powered insights
 * 
 * @param issue - The GitHub issue to analyze
 * @param options - Configuration options for analysis
 * @returns Promise resolving to analysis results
 * @throws {APIError} When AI provider fails
 */
export async function analyzeIssue(
  issue: GitHubIssue,
  options?: AnalysisOptions
): Promise<IssueAnalysis> {
  // Implementation
}
```

### README Updates

Update README.md when:
- Adding new features
- Changing setup process
- Modifying configuration
- Adding dependencies

## 🐛 Bug Reports

### Before Submitting

1. Check existing issues
2. Try the latest version
3. Gather reproduction steps

### Bug Report Template

```markdown
**Describe the bug**
A clear description of the bug.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g., macOS, Windows, Linux]
- Browser: [e.g., Chrome, Firefox]
- Node version: [e.g., 18.0.0]
- IssuePilot version: [e.g., 0.1.0]

**Additional context**
Any other relevant information.
```

## ✨ Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Mockups, examples, or references.
```

## 🏷️ Issue Labels

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `question` - Further information requested
- `wontfix` - This will not be worked on

## 🤝 Code Review Process

### For Contributors

- Be open to feedback
- Respond to review comments
- Make requested changes promptly
- Ask questions if unclear

### For Reviewers

- Be respectful and constructive
- Explain reasoning for suggestions
- Approve when ready
- Provide clear feedback

## 📞 Getting Help

- 💬 **GitHub Discussions**: Ask questions
- 🐛 **GitHub Issues**: Report bugs
- 📧 **Email**: support@issuepilot.dev

## 📜 Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to IssuePilot! 🎉
