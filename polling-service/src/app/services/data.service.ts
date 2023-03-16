import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/posts?_start=${(
        Math.random() * 10
      ).toFixed(0)}&_limit=5`,
    );
  }
}
