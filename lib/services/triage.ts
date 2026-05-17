import { prisma } from '@/lib/db'
import { aiProvider } from '@/lib/ai'

/**
 * Issue Triage Service
 * 
 * Handles the complete triage workflow for GitHub issues
 */

export async function triageIssue(issueId: string) {
  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
    include: { repository: true },
  })

  if (!issue) {
    throw new Error('Issue not found')
  }

  // 1. Generate AI summary and analysis
  const summary = await aiProvider.summarizeIssue(
    issue.title,
    issue.body || ''
  )

  // 2. Suggest labels
  const labelSuggestions = await aiProvider.suggestLabels(
    issue.title,
    issue.body || ''
  )

  // 3. Generate task breakdown
  const breakdown = await aiProvider.breakdownTask(
    issue.title,
    issue.body || ''
  )

  // 4. Check for duplicates
  const existingIssues = await prisma.issue.findMany({
    where: {
      repositoryId: issue.repositoryId,
      id: { not: issueId },
      state: 'open',
    },
    select: {
      id: true,
      number: true,
      title: true,
      body: true,
    },
    take: 20,
  })

  const duplicates = await aiProvider.detectDuplicates(
    issue.title,
    issue.body || '',
    existingIssues.map(i => ({
      number: i.number,
      title: i.title,
      body: i.body || '',
    }))
  )

  // 5. Save triage results
  const triageResult = await prisma.triageResult.upsert({
    where: { issueId },
    create: {
      issueId,
      summary: summary.summary,
      problem: summary.problem,
      affectedArea: summary.affectedArea,
      complexity: summary.complexity,
      reproductionSteps: breakdown.reproductionSteps,
      expectedBehavior: breakdown.expectedBehavior,
      possibleFiles: breakdown.possibleFiles,
      acceptanceCriteria: breakdown.acceptanceCriteria,
    },
    update: {
      summary: summary.summary,
      problem: summary.problem,
      affectedArea: summary.affectedArea,
      complexity: summary.complexity,
      reproductionSteps: breakdown.reproductionSteps,
      expectedBehavior: breakdown.expectedBehavior,
      possibleFiles: breakdown.possibleFiles,
      acceptanceCriteria: breakdown.acceptanceCriteria,
    },
  })

  // 6. Save label suggestions
  await prisma.labelSuggestion.deleteMany({ where: { issueId } })
  await prisma.labelSuggestion.createMany({
    data: labelSuggestions.map(ls => ({
      issueId,
      label: ls.label,
      confidence: ls.confidence,
      reason: ls.reason,
    })),
  })

  // 7. Save duplicate matches
  await prisma.duplicateMatch.deleteMany({ where: { originalIssueId: issueId } })
  for (const dup of duplicates) {
    const duplicateIssue = existingIssues.find(i => i.number === dup.issueNumber)
    if (duplicateIssue) {
      await prisma.duplicateMatch.create({
        data: {
          originalIssueId: issueId,
          duplicateIssueId: duplicateIssue.id,
          similarity: dup.similarity,
          reason: dup.reason,
        },
      })
    }
  }

  return {
    triageResult,
    labelSuggestions,
    duplicates,
  }
}

/**
 * Batch triage multiple issues
 */
export async function triageMultipleIssues(issueIds: string[]) {
  const results = []
  
  for (const issueId of issueIds) {
    try {
      const result = await triageIssue(issueId)
      results.push({ issueId, success: true, result })
    } catch (error) {
      results.push({ 
        issueId, 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    }
  }

  return results
}
