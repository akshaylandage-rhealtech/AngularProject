import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBookPopupComponent } from './issue-book-popup.component';

describe('IssueBookPopupComponent', () => {
  let component: IssueBookPopupComponent;
  let fixture: ComponentFixture<IssueBookPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueBookPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBookPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
