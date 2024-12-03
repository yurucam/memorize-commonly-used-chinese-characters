import { Word } from './word';

export class Question {
  id: number;
  target: Word;
  options: Word[];
  selectedOption: Word;
  isCorrect: boolean | null;

  constructor() {
    this.id = 0;
    this.target = new Word();
    this.options = [];
    this.selectedOption = new Word();
    this.isCorrect = null;
  }

  selectOption(option: Word): void {
    if (this.options.indexOf(option) === -1) {
      throw new Error('Unknown option');
    }
    this.selectedOption = option;
    this.isCorrect = this.target.equals(option);
  }
}
