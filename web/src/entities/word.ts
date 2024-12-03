export class Word {
  id: number;
  kanji: string;
  meaning: string;
  hiragana: string;
  starred: boolean;

  constructor() {
    this.id = 0;
    this.kanji = '';
    this.meaning = '';
    this.hiragana = '';
    this.starred = false;
  }

  equals(other: Word): boolean {
    return this.id === other.id;
  }
}
