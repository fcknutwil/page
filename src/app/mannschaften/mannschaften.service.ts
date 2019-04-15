import { Injectable } from '@angular/core';
import { Mannschaft } from '../types/mannschaft';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MannschaftenService {

  constructor(private http: HttpClient) { }

  public liste(): Observable<Mannschaft[]> {
    return this.http.get<Mannschaft[]>('mannschaften');
  }

  public get(id: string): Observable<Mannschaft> {
    return this.http.get<Mannschaft>(`mannschaften/${id}`);
  }
}
