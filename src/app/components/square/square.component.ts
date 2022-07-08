import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Pipe, Tool } from 'src/app/shared/models';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() pipe!: Pipe | undefined;
  @Input() selectedTool!: Pipe | undefined;
  @Input() tools!: Tool[] | null;

  preview: boolean = false;
}
