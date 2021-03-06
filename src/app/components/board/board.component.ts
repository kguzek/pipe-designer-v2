import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { DeleteTool, Pipe, PipeGrid } from 'src/app/shared/models';
import { PlacePipeInGrid, ResetPipes } from 'src/app/shared/pipes.actions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  rows!: number;
  columns!: number;
  @Input() tools!: Array<Pipe | DeleteTool> | null;
  @Input() pipes!: PipeGrid | null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.rows = 3;
    this.columns = 3;
    this.store.dispatch(new ResetPipes());
  }

  getSelectedTool = () => this.tools?.find((tool) => tool.selected);

  columnsFull = () => this.columns >= 10;

  handleAdd(dimension: string) {
    if (dimension === 'row') {
      this.rows += 1;
    } else {
      if (this.columnsFull()) return;
      this.columns += 1;
    }
  }

  onClick(row: number, column: number) {
    const selectedTool = this.getSelectedTool();
    if (!selectedTool) return;
    this.store.dispatch(
      new PlacePipeInGrid({ row, column, pipe: selectedTool })
    );
  }
}
