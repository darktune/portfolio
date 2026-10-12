import { gwenKnowledgeBase } from '../../data/gwenKnowledge';
import { finishedProjectsData } from '../../data/finishedProjects';
import { projectsData } from '../../data/projects';

export function queryGwenKnowledge(userPrompt) {
  if (!userPrompt || typeof userPrompt !== 'string') {
    return {
      answer: "Hello, I am GWEN, Abraham's portfolio companion. Feel free to ask about his living virtual worlds (**CivOS**), safe gaming trades (**D MEX**), high speed trading screens (**STELCERA**), games (**Paint Infusion**), sensory research (**OEES**), or his origin in pointillism fine art since age six.",
      contextCard: null,
      followUps: gwenKnowledgeBase.suggestedPrompts.slice(0, 3)
    };
  }

  const query = userPrompt.toLowerCase().trim();

  // Check for direct @project mentions or explicit project name matches
  const projectMentionMatch = query.match(/@([\w-]+)/);
  const rawTag = projectMentionMatch ? projectMentionMatch[1].toLowerCase() : null;

  // Search in finished projects first, then fallback to projectsData
  const allProjects = [...finishedProjectsData, ...projectsData];
  const matchedProj = allProjects.find(p => {
    if (rawTag) {
      return p.id.toLowerCase().includes(rawTag) || p.title.toLowerCase().includes(rawTag);
    }
    const cleanTitle = p.title.toLowerCase().replace(/-/g, ' ');
    return query.includes(cleanTitle) || query.includes(p.id.toLowerCase().replace(/-/g, ' '));
  });

  // Score knowledge entries by keyword / intent matches
  let bestEntry = null;
  let highestScore = 0;

  for (const entry of gwenKnowledgeBase.knowledgeEntries) {
    let score = 0;
    const keywords = entry.intent || entry.keywords || [];
    for (const kw of keywords) {
      if (query.includes(kw.toLowerCase())) {
        score += kw.length * 2; // weight longer matches more
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  // If knowledge base has a high confidence answer, prioritize it
  if (bestEntry && highestScore >= 3) {
    return {
      answer: bestEntry.answer,
      contextCard: bestEntry.contextCard || null,
      followUps: bestEntry.followUps || gwenKnowledgeBase.suggestedPrompts.slice(0, 3)
    };
  }

  // If a specific project was matched directly
  if (matchedProj) {
    return {
      answer: `**${matchedProj.title}** (${matchedProj.year}) · ${matchedProj.subtitle}.\n\n${matchedProj.summary}\n\n**Role:** ${matchedProj.role}\n**Status:** ${matchedProj.statusBadge || matchedProj.status}\n**Tech Stack:** ${matchedProj.techStack.join(' · ')}`,
      contextCard: {
        title: matchedProj.title,
        badge: `${matchedProj.statusBadge || matchedProj.badge || matchedProj.year}`,
        detail: matchedProj.techStack.slice(0, 4).join(' · '),
        actionText: `VIEW ${matchedProj.title.split(' ')[0].toUpperCase()} DETAILS →`,
        projectId: matchedProj.id
      },
      followUps: [
        `How does ${matchedProj.title.split(' ')[0]} work?`,
        "What is CivOS?",
        "Tell me about STELCERA Terminal",
        "Tell me about his fine art background"
      ]
    };
  }

  // Fallback response for unindexed queries
  return {
    answer: "I can share the heart, story, and engineering behind all of Abraham's creations:\n\n• **Living Virtual Worlds**: **CivOS** · intelligent characters that remember and grow.\n• **Fair Game Trading**: **D MEX Protocol** · letting players trade freely without middlemen.\n• **High Speed Finance**: **STELCERA Terminal** · 105 trading desks with zero lag.\n• **Play and Senses**: **Paint Infusion** tactical gaming and **OEES** scent immersion.\n• **Art Since Age Six**: Over twenty years of patient ink drawings with zero margin for error.\n\nWhich of these would you love to explore?",
    contextCard: {
      title: "Abraham Toluwani · Creative Journey",
      badge: "Full Portfolio Companion",
      detail: "Systems Architect · Software Engineer · Researcher · Game Designer",
      actionText: "EXPLORE VERIFIED DEPLOYMENTS",
      targetSection: "projects"
    },
    followUps: [
      "What is The OASIS and Abraham's vision?",
      "How does art since age six inspire his software?",
      "Tell me about D MEX Protocol",
      "Tell me about STELCERA Terminal"
    ]
  };
}
