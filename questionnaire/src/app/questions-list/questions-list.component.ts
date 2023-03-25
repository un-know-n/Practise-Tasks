import { Component } from '@angular/core';
import { AppStore } from '../shared/store/app.store';
import { Store } from '@ngrx/store';
import {
  selectAnsweredQuestions,
  selectUnansweredQuestions,
} from '../shared/store/questions/questions.selectors';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
})
export class QuestionsListComponent {
  public unansweredQuestions$ = this.store.select(selectUnansweredQuestions);
  public answeredQuestions$ = this.store.select(selectAnsweredQuestions);

  constructor(private store: Store<AppStore>) {}
}
