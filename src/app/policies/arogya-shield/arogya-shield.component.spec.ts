import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArogyaShieldComponent } from './arogya-shield.component';

describe('ArogyaShieldComponent', () => {
  let component: ArogyaShieldComponent;
  let fixture: ComponentFixture<ArogyaShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArogyaShieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArogyaShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
