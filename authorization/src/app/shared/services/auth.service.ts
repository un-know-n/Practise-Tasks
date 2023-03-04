import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { IResponseCredentials, IUserAuth } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: IUserAuth): Observable<IResponseCredentials> {
    return this.http.post<IResponseCredentials>(
      `${environment.API_URL}/login`,
      data,
    );
  }
}
