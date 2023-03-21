import { Component } from '@angular/core';
import { IQuestion } from '../shared/models/questions';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent {
  onSaveQuestion(question: IQuestion) {
    console.log(question);
  }
}
