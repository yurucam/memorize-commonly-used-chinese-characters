import { Unit } from './unit';

export class Group {
  id: number;
  name: string;
  description: string;
  units: Unit[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.units = [];
  }
}
