import { TestBed } from '@angular/core/testing';

import { HeimspieleService } from './heimspiele.service';

describe('HeimspieleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeimspieleService = TestBed.get(HeimspieleService);
    expect(service).toBeTruthy();
  });
});
