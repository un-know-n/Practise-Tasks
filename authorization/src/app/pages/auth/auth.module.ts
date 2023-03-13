import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';

import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
  exports: [AuthComponent],
})
export class AuthModule {}
