import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
  },
];

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [AdminPanelComponent],
})
export class AdminPanelModule {}
