import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEditDeleteComponent } from './insert-edit-delete.component';

describe('InsertEditDeleteComponent', () => {
  let component: InsertEditDeleteComponent;
  let fixture: ComponentFixture<InsertEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertEditDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
