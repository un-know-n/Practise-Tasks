import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionManagementComponent } from './question-management.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from './components/confirm-dialogue/confirm-dialogue.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionManagementComponent,
  },
];

@NgModule({
  declarations: [QuestionManagementComponent, ConfirmDialogueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatDialogModule,
  ],
  exports: [RouterModule],
})
export class QuestionManagementModule {}
