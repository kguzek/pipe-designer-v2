import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares: Array<'X' | 'O'> = [];
  xIsNext: boolean = true;
  winner: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (this.squares[idx]) {
      return;
    }
    this.squares.splice(idx, 1, this.player);
    this.winner = this.calculateWinner();
    this.xIsNext = !this.xIsNext;
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
