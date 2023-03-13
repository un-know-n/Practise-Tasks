import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_core/state/app.state';
import { DataActions } from 'src/app/_core/state/data/data.actions';
import { selectUsers } from 'src/app/_core/state/data/data.selectors';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  public users$ = this.store.select(selectUsers);
  public displayedColumns = [
    'name',
    'lastName',
    'dateOfBirth',
    'education',
    'role',
    'position',
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(DataActions.loadUsers());
  }
}
