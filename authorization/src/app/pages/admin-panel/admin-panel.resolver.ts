import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/_core/services/data.service';
import { IAdminPanelItem } from 'src/app/shared/models/data.model';

@Injectable({
  providedIn: 'root',
})
export class AdminPanelResolver implements Resolve<IAdminPanelItem[]> {
  constructor(private dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<IAdminPanelItem[]> {
    return this.dataService.getUsers();
  }
}
