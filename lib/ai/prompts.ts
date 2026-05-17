/**
 * AI Prompts for Issue Triage
 * 
 * These prompts are designed to be provider-agnostic and can be used
 * with OpenAI, Anthropic, or local models.
 * 
 * TODO: Move to database or config files for easier contributor editing
 */

export const SUMMARIZE_ISSUE_PROMPT = `You are an expert GitHub issue triager. Analyze the following issue and provide:

1. A concise summary (1-2 sentences)
2. The core problem being reported
3. The affected area/component (e.g., "frontend/auth", "backend/api", "docs")
4. Complexity level: "beginner", "intermediate", or "advanced"

Issue Title: {title}
Issue Body: {body}

Respond in JSON format:
{
  "summary": "...",
  "problem": "...",
  "affectedArea": "...",
  "complexity": "beginner|intermediate|advanced"
}`

export const SUGGEST_LABELS_PROMPT = `You are an expert at categorizing GitHub issues. Based on the issue below, suggest appropriate labels.

Common labels include:
- bug, enhancement, documentation, testing
- frontend, backend, api, database
- good first issue, help wanted
- priority: high, priority: medium, priority: low

Issue Title: {title}
Issue Body: {body}

Suggest 2-5 labels with confidence scores (0-1) and brief reasons.

Respond in JSON format:
[
  {
    "label": "bug",
    "confidence": 0.9,
    "reason": "User reports unexpected behavior"
  }
]`

export const DETECT_DUPLICATES_PROMPT = `You are an expert at detecting duplicate GitHub issues. Compare the new issue against existing issues.

New Issue:
Title: {newTitle}
Body: {newBody}

Existing Issues:
{existingIssues}

Identify potential duplicates with similarity scores (0-1) and reasons.

Respond in JSON format:
[
  {
    "issueNumber": 123,
    "issueTitle": "...",
    "similarity": 0.85,
    "reason": "Both report the same login error"
  }
]`

export const BREAKDOWN_TASK_PROMPT = `You are an expert at converting vague bug reports into contributor-friendly tasks.

Issue Title: {title}
Issue Body: {body}

Create a structured task breakdown with:
1. Problem summary
2. Reproduction steps (if applicable)
3. Expected behavior
4. Possible files/components involved
5. Acceptance criteria

Respond in JSON format:
{
  "summary": "...",
  "reproductionSteps": ["Step 1", "Step 2"],
  "expectedBehavior": "...",
  "possibleFiles": ["src/components/Auth.tsx"],
  "acceptanceCriteria": ["Criterion 1", "Criterion 2"]
}`
