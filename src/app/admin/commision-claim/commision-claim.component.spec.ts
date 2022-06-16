import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisionClaimComponent } from './commision-claim.component';

describe('CommisionClaimComponent', () => {
  let component: CommisionClaimComponent;
  let fixture: ComponentFixture<CommisionClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommisionClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommisionClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
