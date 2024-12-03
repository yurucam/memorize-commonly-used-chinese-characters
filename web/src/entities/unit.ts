import { Test } from './test';
import { Word } from './word';

export class Unit {
  id: number;
  words: Word[];
  tests: Test[];

  constructor() {
    this.id = 0;
    this.words = [];
    this.tests = [];
  }

  get starredWords(): Word[] {
    return this.words.filter((word) => word.starred);
  }

  get latestAchievedPercent(): number {
    const test = this.tests[this.tests.length - 1];
    return test ? test.achievedPercent : 0;
  }
}
