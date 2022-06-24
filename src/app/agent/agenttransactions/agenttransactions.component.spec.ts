import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenttransactionsComponent } from './agenttransactions.component';

describe('AgenttransactionsComponent', () => {
  let component: AgenttransactionsComponent;
  let fixture: ComponentFixture<AgenttransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenttransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenttransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
