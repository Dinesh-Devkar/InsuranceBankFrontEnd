import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewCustomersComponent } from './agent-view-customers.component';

describe('AgentViewCustomersComponent', () => {
  let component: AgentViewCustomersComponent;
  let fixture: ComponentFixture<AgentViewCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentViewCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentViewCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
