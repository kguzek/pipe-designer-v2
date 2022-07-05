import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAddBtnComponent } from './grid-add-btn.component';

describe('GridAddBtnComponent', () => {
  let component: GridAddBtnComponent;
  let fixture: ComponentFixture<GridAddBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridAddBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridAddBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
