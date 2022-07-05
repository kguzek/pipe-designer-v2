import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Tool } from 'src/app/shared/models';
import { RotateSelectedTool } from 'src/app/shared/tools.actions';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {
  @Input() alt!: string;
  @Input() tools!: Tool[] | null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  getRotateBtnClassName(): string {
    const selectedTool = this.tools?.find((tool) => tool.selected)?.name;
    return selectedTool && selectedTool !== 'btn-delete' ? '' : 'disabled';
  }

  getToolClassName(option: string): string {
    const selectedTool = this.tools?.find((tool) => tool.selected)?.name;
    let className =
      option === 'btn-delete'
        ? 'd-flex align-items-center justify-content-center'
        : '';
    if (selectedTool === option) {
      className += ' selected';
    }
    return className;
  }

  handleRotate() {
    this.store.dispatch(new RotateSelectedTool());
  }
}
