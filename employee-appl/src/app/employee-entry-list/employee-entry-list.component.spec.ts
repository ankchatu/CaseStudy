import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEntryListComponent } from './employee-entry-list.component';

describe('EmployeeEntryListComponent', () => {
  let component: EmployeeEntryListComponent;
  let fixture: ComponentFixture<EmployeeEntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEntryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
