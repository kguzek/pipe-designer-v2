import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { SetSelectedTool } from 'src/app/shared/tools.actions';

@Component({
  selector: 'app-toolbox-option',
  templateUrl: './toolbox-option.component.html',
  styleUrls: ['./toolbox-option.component.scss'],
})
export class ToolboxOptionComponent implements OnInit {
  @Input() option!: string;
  @Input() alt!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  handleClick() {
    this.store.dispatch(new SetSelectedTool(this.option));
  }
}
