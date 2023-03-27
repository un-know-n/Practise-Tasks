import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../shared/store/app.store';
import { QuestionsActions } from '../../shared/store/questions/questions.actions';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private store: Store<AppStore>) {}

  onAnswer(id: string, answer: string[]): void {
    this.store.dispatch(QuestionsActions.answerQuestion({ id, answer }));
  }

  onRevert(id: string): void {
    this.store.dispatch(QuestionsActions.revertQuestion({ id }));
  }
}
