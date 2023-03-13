import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';

import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
  },
];

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [AdminPanelComponent],
})
export class AdminPanelModule {}
