import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IAdminPanelItem,
  IAssessmentReport,
  IDashboardItem,
} from 'src/app/shared/models/data.model';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getDashboard(): Observable<IDashboardItem[]> {
    return this.http.get<IDashboardItem[]>(
      `${environment.API_URL}/userassessments`,
    );
  }

  getDashboardAssessment(id: string | number): Observable<IAssessmentReport> {
    return this.http.get<IAssessmentReport>(
      `${environment.API_URL}/userassessments/graph`,
      { params: { id } },
    );
  }

  getUsers(): Observable<IAdminPanelItem[]> {
    return this.http.get<IAdminPanelItem[]>(`${environment.API_URL}/users`);
  }
}
