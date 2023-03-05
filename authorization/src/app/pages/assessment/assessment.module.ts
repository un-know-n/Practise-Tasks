import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AssessmentComponent } from './assessment.component';

const routes: Routes = [
  {
    path: '',
    component: AssessmentComponent,
  },
];

@NgModule({
  declarations: [AssessmentComponent],
  imports: [CommonModule, NgxChartsModule, RouterModule.forChild(routes)],
  exports: [AssessmentComponent],
})
export class AssessmentModule {}
