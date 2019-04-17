import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeebliService {

  constructor(private http: HttpClient) { }

  public load(): Observable<any> {
    return this.http.get<any>('seebli');
  }

}