import { TestBed } from '@angular/core/testing';

import { Proll } from './proll';

describe('Proll', () => {
  let service: Proll;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Proll);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
