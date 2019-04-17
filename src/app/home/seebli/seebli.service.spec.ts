import { TestBed } from '@angular/core/testing';

import { SeebliService } from './seebli.service';

describe('SeebliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeebliService = TestBed.get(SeebliService);
    expect(service).toBeTruthy();
  });
});
