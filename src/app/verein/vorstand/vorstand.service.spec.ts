import { TestBed } from '@angular/core/testing';

import { VorstandService } from './vorstand.service';

describe('VorstandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VorstandService = TestBed.get(VorstandService);
    expect(service).toBeTruthy();
  });
});
