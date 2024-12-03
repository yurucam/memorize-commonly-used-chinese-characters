import { Question } from './question';

export class Test {
  id: number;
  name: string;
  questions: Question[];
  createdAt: string; // DateTime

  constructor() {
    this.id = 0;
    this.name = '';
    this.questions = [];
    this.createdAt = '';
  }

  get questionToSolve(): Question | null {
    return this.questions.find((question) => question.isCorrect === null) || null;
  }

  get isFinished(): boolean {
    return this.questions.every((question) => question.isCorrect !== null);
  }

  get achievedPercent(): number {
    const correctCount = this.questions.filter((question) => question.isCorrect).length;
    return Math.floor((correctCount / this.questions.length) * 100);
  }
}
