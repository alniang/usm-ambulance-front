import { TestBed } from '@angular/core/testing';

import { Ambulance } from './ambulance';

describe('Ambulance', () => {
  let service: Ambulance;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ambulance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
