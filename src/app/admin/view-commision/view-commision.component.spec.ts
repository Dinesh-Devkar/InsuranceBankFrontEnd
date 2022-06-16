import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommisionComponent } from './view-commision.component';

describe('ViewCommisionComponent', () => {
  let component: ViewCommisionComponent;
  let fixture: ComponentFixture<ViewCommisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
