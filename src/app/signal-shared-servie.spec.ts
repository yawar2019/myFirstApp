import { TestBed } from '@angular/core/testing';

import { SignalSharedServie } from './signal-shared-servie';

describe('SignalSharedServie', () => {
  let service: SignalSharedServie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalSharedServie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
