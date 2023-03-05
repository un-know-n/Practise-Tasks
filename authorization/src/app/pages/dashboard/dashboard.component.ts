import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.dashboardData = this.activatedRoute.snapshot.data['dashboard'];
    this.displayedColumns = Object.keys(this.dashboardData[0]);
  }
}
