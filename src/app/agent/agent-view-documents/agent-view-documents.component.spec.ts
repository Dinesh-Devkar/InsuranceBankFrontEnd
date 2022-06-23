import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewDocumentsComponent } from './agent-view-documents.component';

describe('AgentViewDocumentsComponent', () => {
  let component: AgentViewDocumentsComponent;
  let fixture: ComponentFixture<AgentViewDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentViewDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentViewDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
