import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  private isLoading = new BehaviorSubject(false);
  
  constructor() { }

  public getLoadingObservable(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  public set(value: boolean): void {
    this.isLoading.next(value);
  }
}