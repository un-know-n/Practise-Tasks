import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModerateQuestionComponent } from './components/moderate-question/moderate-question.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { ModerateQuestionModule } from './components/moderate-question/moderate-question.module';

@NgModule({
  imports: [CommonModule, HeaderComponent, ModerateQuestionModule],
  exports: [HeaderComponent, ModerateQuestionComponent, FormatDatePipe],
  declarations: [FormatDatePipe],
})
export class SharedModule {}
