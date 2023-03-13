import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_core/state/app.state';
import { DataActions } from 'src/app/_core/state/data/data.actions';
import { selectDashboard } from 'src/app/_core/state/data/data.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public dashboardData$ = this.store.select(selectDashboard);
  public displayedColumns = [
    'id',
    'name',
    'users_resolved',
    'active',
    'image_url',
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(DataActions.loadDashboard());
  }
}
