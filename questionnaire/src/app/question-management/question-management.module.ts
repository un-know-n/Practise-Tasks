import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionManagementComponent } from './question-management.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: QuestionManagementComponent,
  },
];

@NgModule({
  declarations: [QuestionManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [RouterModule],
})
export class QuestionManagementModule {}
