import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pulls } from './Pulls/pulls';

@Injectable({
  providedIn: 'root'
})
export class PullsService {

  constructor(private http: HttpClient) { }

  getPulls(name: string, login: string): Observable<Pulls[]> {
    return this.http.get<Pulls[]>(`http://localhost:10203/github/v1/pulls/${name}/${login}`, {
    })
  }

}
