import { Component, HostListener, Input, OnInit } from '@angular/core';
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

  isSelected = (option: string) =>
    this.tools?.find((tool) => tool.selected)?.name === option;

  handleRotate(antiClockwise: boolean = false) {
    this.store.dispatch(new RotateSelectedTool(antiClockwise));
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'r':
        this.handleRotate();
        break;
      case 'R':
        this.handleRotate(true);
        break;
      default:
        break;
    }
  }
}
