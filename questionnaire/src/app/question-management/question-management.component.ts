import { Component } from '@angular/core';
import { selectQuestions } from '../shared/store/questions/questions.selectors';
import { Store } from '@ngrx/store';
import { AppStore } from '../shared/store/app.store';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from './components/confirm-dialogue/confirm-dialogue.component';
import { QuestionsActions } from '../shared/store/questions/questions.actions';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss'],
})
export class QuestionManagementComponent {
  public questions$ = this.store.select(selectQuestions);

  constructor(private store: Store<AppStore>, private dialog: MatDialog) {}

  onDeleteQuestion(id: string, title: string): void {
    this.dialog
      .open(ConfirmDialogueComponent, {
        data: { questionTitle: title },
      })
      .afterClosed()
      .subscribe((doDelete: boolean) => {
        if (doDelete)
          this.store.dispatch(QuestionsActions.deleteQuestion({ id }));
      });
  }
}
