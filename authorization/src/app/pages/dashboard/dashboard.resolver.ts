import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/_core/services/data.service';
import { IDashboardItem } from 'src/app/shared/models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardResolver implements Resolve<IDashboardItem[]> {
  constructor(private dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<IDashboardItem[]> {
    return this.dataService.getDashboard();
  }
}
