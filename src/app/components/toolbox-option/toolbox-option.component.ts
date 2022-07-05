import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Tool } from 'src/app/shared/models';
import { SetSelectedTool } from 'src/app/shared/tools.actions';

@Component({
  selector: 'app-toolbox-option',
  templateUrl: './toolbox-option.component.html',
  styleUrls: ['./toolbox-option.component.scss'],
})
export class ToolboxOptionComponent implements OnInit {
  @Input() tool!: Tool;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  handleClick() {
    this.store.dispatch(new SetSelectedTool(this.tool.name));
  }
}
