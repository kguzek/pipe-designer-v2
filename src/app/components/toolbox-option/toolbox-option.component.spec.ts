import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxOptionComponent } from './toolbox-option.component';

describe('ToolboxOptionComponent', () => {
  let component: ToolboxOptionComponent;
  let fixture: ComponentFixture<ToolboxOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolboxOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolboxOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
