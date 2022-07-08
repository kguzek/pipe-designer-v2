import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-add-btn',
  templateUrl: './grid-add-btn.component.html',
  styleUrls: ['./grid-add-btn.component.scss'],
})
export class GridAddBtnComponent {
  @Input() disabled!: boolean;
  @Input() column!: boolean;

  constructor() {}
}
