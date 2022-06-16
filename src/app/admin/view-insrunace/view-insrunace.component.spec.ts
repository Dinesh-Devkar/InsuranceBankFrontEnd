import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsrunaceComponent } from './view-insrunace.component';

describe('ViewInsrunaceComponent', () => {
  let component: ViewInsrunaceComponent;
  let fixture: ComponentFixture<ViewInsrunaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsrunaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInsrunaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
