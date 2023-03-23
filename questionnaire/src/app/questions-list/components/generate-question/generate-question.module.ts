import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQuestionComponent } from './generate-question.component';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';
import { OpenComponent } from './open/open.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [GenerateQuestionComponent],
  imports: [
    CommonModule,
    OpenComponent,
    MultipleComponent,
    SingleComponent,
    MatCardModule,
  ],
  exports: [GenerateQuestionComponent],
})
export class GenerateQuestionModule {}
