import { profileData } from './profile';
import { disciplinesData, polymathCausalityMatrix } from './disciplines';
import { projectsData } from './projects';
import { skillsTaxonomy, labExperiments } from './skills';
import { timelineData, currentlyNowData } from './timeline';
import { referenceArtData } from './references';
import { gwenKnowledgeBase } from './gwenKnowledge';

export const portfolioData = {
  personal: profileData,
  disciplines: disciplinesData,
  polymathSynthesis: polymathCausalityMatrix,
  projects: projectsData,
  skillsTaxonomy: skillsTaxonomy,
  labExperiments: labExperiments,
  timeline: timelineData,
  currentlyNow: currentlyNowData,
  referenceArt: referenceArtData,
  gwen: gwenKnowledgeBase
};

export {
  profileData,
  disciplinesData,
  polymathCausalityMatrix,
  projectsData,
  skillsTaxonomy,
  labExperiments,
  timelineData,
  currentlyNowData,
  referenceArtData,
  gwenKnowledgeBase
};
