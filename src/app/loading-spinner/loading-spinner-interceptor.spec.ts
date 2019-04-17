import { TestBed } from '@angular/core/testing';
import { LoadingSpinnerInterceptor } from './loading-spinner-interceptor';


describe('RequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const interceptor : LoadingSpinnerInterceptor = TestBed.get(LoadingSpinnerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
