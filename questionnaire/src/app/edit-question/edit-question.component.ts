import { Component } from '@angular/core';
import { IQuestion } from '../shared/models/questions';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent {
  mockQuestion: IQuestion = {
    answer: null,
    createdAt: '21/03/2023',
    id: 'Gm83cVpHWO34IqiOcOx42',
    options: ['Something', 'asdasd'],
    title: 'asdc',
    type: 'single',
  };

  onSaveQuestion(question: IQuestion) {
    console.log(question);
  }
}
