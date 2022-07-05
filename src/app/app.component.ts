import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { Tool } from './shared/models';
import { SetSelectedTool } from './shared/tools.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pipe-designer-v2';

  tools: Observable<Tool[]>;

  constructor(private store: Store<AppState>) {
    this.tools = this.store.select('tools');
  }
}
