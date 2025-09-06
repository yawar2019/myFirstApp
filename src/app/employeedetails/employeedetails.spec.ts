import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeedetails } from './employeedetails';

describe('Employeedetails', () => {
  let component: Employeedetails;
  let fixture: ComponentFixture<Employeedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeedetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeedetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
