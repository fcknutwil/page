import { TestBed } from '@angular/core/testing';

import { MannschaftenService } from './mannschaften.service';

describe('MannschaftenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MannschaftenService = TestBed.get(MannschaftenService);
    expect(service).toBeTruthy();
  });
});
