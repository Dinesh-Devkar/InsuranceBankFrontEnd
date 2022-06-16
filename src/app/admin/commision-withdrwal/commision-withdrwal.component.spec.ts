import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisionWithdrwalComponent } from './commision-withdrwal.component';

describe('CommisionWithdrwalComponent', () => {
  let component: CommisionWithdrwalComponent;
  let fixture: ComponentFixture<CommisionWithdrwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommisionWithdrwalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommisionWithdrwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
