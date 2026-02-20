import { TestBed } from '@angular/core/testing';

import { Pcs } from './pcs';

describe('Pcs', () => {
  let service: Pcs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pcs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
