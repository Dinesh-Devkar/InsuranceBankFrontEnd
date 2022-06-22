import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewDocumentsComponent } from './admin-view-documents.component';

describe('AdminViewDocumentsComponent', () => {
  let component: AdminViewDocumentsComponent;
  let fixture: ComponentFixture<AdminViewDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
