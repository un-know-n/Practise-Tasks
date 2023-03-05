import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IAssessmentReport, IDashboardItem } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDashboard(): Observable<IDashboardItem[]> {
    return of([
      {
        id: 1,
        name: 'Core Drivers',
        users_resolved: 5,
        active: true,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpKuhQnt2Gn5wm0usuP2QK8CB5z8_yBB8oQ&usqp=CAU',
      },
      {
        id: 2,
        name: 'Stress Test',
        users_resolved: 10,
        active: false,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NL_oubZzB0fIH0wOF7eBaVGxE4ySd1QDz3m5YXIi8rcB9b3fMcZSy14hsGFAgLo0Xac&usqp=CAU',
      },
      {
        id: 3,
        name: 'Leadership Styles',
        users_resolved: 7,
        active: true,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExtoLVhMIfPRj_8d5RQKF2qjwUbuYL2tZTg&usqp=CAU',
      },
      {
        id: 4,
        name: 'Career Values',
        users_resolved: 15,
        active: false,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQwn4a_TR68qjoCIrzfFtBnUmnd0KvnsG7A&usqp=CAU',
      },
      {
        id: 5,
        name: 'Emotional Intelligence',
        users_resolved: 8,
        active: true,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff8JL9ALjQrQ11mS8MNLOGgyOXjRTJEckCA&usqp=CAU',
      },
      {
        id: 6,
        name: 'Communication Styles',
        users_resolved: 12,
        active: false,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqOpleaIJXTcnOmbywkrgM8kWXB9QUVa_cA&usqp=CAU',
      },
      {
        id: 7,
        name: 'Time Management',
        users_resolved: 6,
        active: true,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX029ohIUSygq9zirl9fSNBwSLqEOaKEYuw&usqp=CAU',
      },
      {
        id: 8,
        name: 'Conflict Management',
        users_resolved: 9,
        active: false,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU',
      },
      {
        id: 9,
        name: 'Decision Making',
        users_resolved: 11,
        active: true,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4rN33PyWHKh1AnV91DHPLsB-t-FEAjS2eA&usqp=CAU',
      },
      {
        id: 10,
        name: 'Team Building',
        users_resolved: 4,
        active: false,
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqffFu_JEH6yhJUG4cX5rfhabtgRUlblRUEJ7smPK5xSvdjGqS35k7yiBAchjJAlXbWhI&usqp=CAU',
      },
    ]);
    // return this.http.get<IDashboardItem[]>(
    //   `${environment.API_URL}/userassessments`,
    // );
  }

  getDashboardAssessment(id: string | number): Observable<IAssessmentReport> {
    return of({
      data: {
        agreeableness: 15.678,
        drive: 17.891,
        luck: 11.345,
        openness: 22.456,
      },
      type: 'bar',
    });
    // return this.http.get<IAssessmentReport>(
    //   `${environment.API_URL}/userassessments/graph`,
    //   { params: { id } },
    // );
  }
}
