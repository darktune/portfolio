import { gwenKnowledgeBase } from '../../data/gwenKnowledge';
import { finishedProjectsData } from '../../data/finishedProjects';
import { projectsData } from '../../data/projects';

export function queryGwenKnowledge(userPrompt) {
  if (!userPrompt || typeof userPrompt !== 'string') {
    return {
      answer: "I am GWEN, Abraham's AI systems intelligence. Ask me about his distributed architectures (**CivOS**), gas-optimized smart contracts (**D-MEX**), 105-desk quant terminal (**STELCERA**), game engines (**Paint Infusion**), sensory HCI (**OEES**), or his origin in pointillism fine art since age six.",
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
    const cleanTitle = p.title.toLowerCase();
    return query.includes(cleanTitle) || query.includes(p.id.toLowerCase());
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
      answer: `**${matchedProj.title}** (${matchedProj.year}) — ${matchedProj.subtitle}.\n\n${matchedProj.summary}\n\n**Role:** ${matchedProj.role}\n**Status:** ${matchedProj.statusBadge || matchedProj.status}\n**Tech Stack:** ${matchedProj.techStack.join(' · ')}`,
      contextCard: {
        title: matchedProj.title,
        badge: `${matchedProj.statusBadge || matchedProj.badge || matchedProj.year}`,
        detail: matchedProj.techStack.slice(0, 5).join(' · '),
        actionText: `VIEW ${matchedProj.title.split(' ')[0].toUpperCase()} DETAILS →`,
        projectId: matchedProj.id
      },
      followUps: [
        `How does ${matchedProj.title.split(' ')[0]} work?`,
        "What is CivOS?",
        "Explain Abraham's 105-desk quant terminal",
        "Tell me about his fine art background"
      ]
    };
  }

  // Fallback response for unindexed queries
  return {
    answer: "I can give you deep technical insight into Abraham's entire body of work—including his unlisted research prototypes:\n\n- **Distributed Systems**: **CivOS** (5-tier C++ compute hierarchy cutting LLM overhead by 94%).\n- **Smart Contracts**: **D-MEX Protocol** (Yul inline assembly HTLC atomic swaps).\n- **Quant Systems**: **STELCERA Terminal** (105 desks, 120 FPS Canvas orderbook DOM).\n- **Game Design & HCI**: **Paint Infusion** (tactile tactical combat) & **OEES** (olfactory scent actuators with sub-50ms serial bus).\n- **Fine Art Origin**: Handcrafted pointillism since age six (Spectrum Ori exhibition masterworks *'Illusion of Freedom'* & *'Morayo'*).\n\nWhat would you like to delve into?",
    contextCard: {
      title: "Abraham Toluwani — Intelligence Scope",
      badge: "Full Technical Knowledge",
      detail: "Systems Architect · Smart Contract Engineer · Researcher · Game Designer",
      actionText: "EXPLORE VERIFIED DEPLOYMENTS",
      targetSection: "projects"
    },
    followUps: [
      "What is CivOS and the 5-tier compute hierarchy?",
      "How does his art since age 6 inspire his code?",
      "Tell me about D-MEX cross-chain swaps",
      "What is OEES olfactory HCI research?"
    ]
  };
}
