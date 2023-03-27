import { Component } from '@angular/core';
import { IQuestion } from '../shared/models/questions';
import { Store } from '@ngrx/store';
import { AppStore } from '../shared/store/app.store';

import { selectQuestionById } from '../shared/store/questions/questions.selectors';
import { QuestionsActions } from '../shared/store/questions/questions.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent {
  public question$ = this.store.select(
    selectQuestionById(this.activatedRoute.snapshot.params['id']),
  );

  constructor(
    private store: Store<AppStore>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  onSaveQuestion(question: IQuestion) {
    this.store.dispatch(QuestionsActions.editQuestion({ question }));
    this.router.navigate(['/']);
  }
}
