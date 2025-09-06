import { TestBed } from '@angular/core/testing';

import { EmployeeServiceApi } from './employee-service-api';

describe('EmployeeServiceApi', () => {
  let service: EmployeeServiceApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServiceApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
