import { Component, Input } from '@angular/core';
import { DeleteTool, Pipe } from 'src/app/shared/models';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() pipe!: Pipe | undefined;
  @Input() selectedTool!: Pipe | DeleteTool | undefined;
  @Input() tools!: Array<Pipe | DeleteTool> | null;

  preview: boolean = false;
}
