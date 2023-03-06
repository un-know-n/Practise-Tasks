import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IDashboardItem } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public dashboardData!: IDashboardItem[];
  public displayedColumns!: string[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(first())
      .subscribe(({ dashboard }) => (this.dashboardData = dashboard));
    this.displayedColumns = Object.keys(this.dashboardData[0]);
  }
}
