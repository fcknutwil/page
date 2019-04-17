import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from 'src/app/types/staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VorstandService {

  constructor(private http: HttpClient) { }

  public liste(): Observable<Staff[]> {
    return this.http.get<Staff[]>('vorstand');
  }
}
