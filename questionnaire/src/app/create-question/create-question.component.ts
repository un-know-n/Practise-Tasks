import { Component } from '@angular/core';
import { IQuestion } from '../shared/models/questions';
import { Store } from '@ngrx/store';
import { AppStore } from '../shared/store/app.store';
import { QuestionsActions } from '../shared/store/questions/questions.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent {
  constructor(private store: Store<AppStore>, private router: Router) {}

  onSaveQuestion(question: IQuestion) {
    this.store.dispatch(QuestionsActions.createQuestion({ question }));
    this.router.navigate(['/']);
  }
}
