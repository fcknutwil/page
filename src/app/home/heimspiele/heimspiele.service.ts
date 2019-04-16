import { Injectable } from '@angular/core';
import { Spieltag } from 'src/app/types/spieltap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeimspieleService {

  constructor(private http: HttpClient) { }

  public load(): Observable<Spieltag[]> {
    return this.http.get<Spieltag[]>('heimspiele');
  }

}
