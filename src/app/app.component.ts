import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { PipeGrid, Tool } from './shared/models';
import { SetSelectedTool } from './shared/tools.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipe-designer-v2';

  tools: Observable<Tool[]>;
  pipes: Observable<PipeGrid>;

  constructor(private store: Store<AppState>) {
    this.tools = this.store.select('tools');
    this.pipes = this.store.select('pipes');
  }

  handleClick(event: any) {
    if (event?.target?.id !== 'app-root') return;
    this.store.dispatch(new SetSelectedTool('none'));
  }
}
