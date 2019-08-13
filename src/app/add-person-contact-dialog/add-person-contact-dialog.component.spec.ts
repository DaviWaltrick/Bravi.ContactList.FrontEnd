import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonContactDialogComponent } from './add-person-contact-dialog.component';

describe('AddPersonContactDialogComponent', () => {
  let component: AddPersonContactDialogComponent;
  let fixture: ComponentFixture<AddPersonContactDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonContactDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
