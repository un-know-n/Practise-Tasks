import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IAssessmentReport } from 'src/app/shared/models/data.model';
import { DataService } from 'src/app/shared/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AssessmentResolver implements Resolve<IAssessmentReport> {
  constructor(private dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<IAssessmentReport> {
    return this.dataService.getDashboardAssessment(route.params['id']);
  }
}
