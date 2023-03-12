import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IResponseCredentials,
  IUserAuth,
} from 'src/app/shared/models/auth.model';
import { environment } from 'src/environments/environment.development';

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
