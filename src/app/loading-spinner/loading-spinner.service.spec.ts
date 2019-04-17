import { TestBed } from '@angular/core/testing';
import { LoadingSpinnerService } from './loading-spinner.service';


describe('RequestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingSpinnerService = TestBed.get(LoadingSpinnerService);
    expect(service).toBeTruthy();
  });
});
