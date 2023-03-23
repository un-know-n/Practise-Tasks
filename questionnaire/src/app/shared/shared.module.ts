import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModerateQuestionComponent } from './components/moderate-question/moderate-question.component';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  imports: [CommonModule, HeaderComponent, ModerateQuestionComponent],
  exports: [HeaderComponent, ModerateQuestionComponent, FormatDatePipe],
  declarations: [FormatDatePipe],
})
export class SharedModule {}
