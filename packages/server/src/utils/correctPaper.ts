import { IPaperQuestion } from '../types';

export const correctPaper = (paper_content: Array<IPaperQuestion>) => {
  let score = 0;
  let percentScore = 0,
    sum = 0;
  for (let i = 0; i < paper_content.length; i++) {
    const question = paper_content[i];
    if (question.type === 'select') {
      sum += question.score;
      if (question.content === question.solution) {
        score += question.score;
      }
    }
  }
  percentScore = Number((score / (sum ? sum : 1)) * 100);

  return {
    score,
    percentScore,
  };
};
