import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewCommisionComponent } from './agent-view-commision.component';

describe('AgentViewCommisionComponent', () => {
  let component: AgentViewCommisionComponent;
  let fixture: ComponentFixture<AgentViewCommisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentViewCommisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentViewCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
