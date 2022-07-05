import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  rows!: number;
  columns!: number;

  constructor() {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.rows = 3;
    this.columns = 3;
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
}
