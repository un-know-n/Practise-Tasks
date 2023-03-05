import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAdminPanelItem } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  public adminData!: IAdminPanelItem[];
  public displayedColumns!: string[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.adminData = this.activatedRoute.snapshot.data['users'];
    this.displayedColumns = Object.keys(this.adminData[0]);
  }
}
