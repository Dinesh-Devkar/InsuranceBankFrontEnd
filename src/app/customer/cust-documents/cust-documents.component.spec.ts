import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDocumentsComponent } from './cust-documents.component';

describe('CustDocumentsComponent', () => {
  let component: CustDocumentsComponent;
  let fixture: ComponentFixture<CustDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
