import { Component, Input, OnInit } from '@angular/core';
import { Tool } from 'src/app/shared/models';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent implements OnInit {
  @Input() alt!: string;
  @Input() tools!: Tool[] | null;

  optionAltTexts: string[] = [''];

  ngOnInit(): void {}

  getClassName(option: string): string {
    const selectedTool = this.tools?.find((tool) => tool.selected)?.name;
    const className = selectedTool === option ? 'selected' : '';
    return className;
  }
}
