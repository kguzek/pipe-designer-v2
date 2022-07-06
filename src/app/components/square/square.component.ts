import { Component, Input } from '@angular/core';
import { Pipe, Tool } from 'src/app/shared/models';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() pipe!: Pipe | undefined;
  @Input() tools!: Tool[] | null;
}
