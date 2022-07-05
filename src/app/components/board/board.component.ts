import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares!: Array<'X' | 'O'>;
  xIsNext!: boolean;
  winner: string | null = null;

  rows = 3;
  columns = 3;

  constructor() {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.rows = 3;
    this.columns = 3;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  handleAdd(dimension: string) {
    if (dimension === 'row') {
      this.rows += 1;
    } else {
      if (this.columns >= 10) return;
      this.columns += 1;
    }
  }

  onClick(row: number, column: number) {
    console.log('Clicked row', row, 'column', column);
  }

  calculateWinner() {
    let lines = [];
    const allPositions = [...Array(9).keys()];
    for (let i = 0; i <= 6; i += 3) {
      lines.push(allPositions.slice(i, i + 3));
    }
    const columns = lines[0].map((el) => el * 3);
    lines = [
      ...lines,
      columns,
      columns.map((el) => el + 1),
      columns.map((el) => el + 2),
      lines[0].map((el) => el * 4),
      allPositions.slice(1, 4).map((el) => el * 2),
    ];
    for (let i = 0; i < lines.length; i++) {
      let t = '';
      for (const idx of lines[i]) {
        t += this.squares[idx];
      }
      if (t === 'OOO') return 'O';
      if (t === 'XXX') return 'X';
    }
    return null;
  }
}
