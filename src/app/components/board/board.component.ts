import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Pipe, PipeGrid, Tool } from 'src/app/shared/models';
import { PlacePipeInGrid, ResetPipes } from 'src/app/shared/pipes.actions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  rows!: number;
  columns!: number;
  @Input() tools!: Tool[] | null;
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

  handleAdd(dimension: string) {
    if (dimension === 'row') {
      this.rows += 1;
    } else {
      if (this.columns >= 10) return;
      this.columns += 1;
    }
  }

  onClick(row: number, column: number) {
    const selectedTool = this.getSelectedTool();
    if (!selectedTool) return;
    const { selected, ...pipe } = selectedTool;
    this.store.dispatch(new PlacePipeInGrid({ row, column, pipe }));
  }
}
