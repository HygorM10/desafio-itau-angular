import { Injectable } from '@angular/core';
import { Repository } from './Repositories/repositories';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>('http://localhost:10203/github/v1/repositories', {
      params: {
        q: 'language:Java',
        sort: 'stars',
        page: '1'
      }
    })
  }

}
