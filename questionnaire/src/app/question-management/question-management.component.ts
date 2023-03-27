import { Component } from '@angular/core';
import { selectQuestions } from '../shared/store/questions/questions.selectors';
import { Store } from '@ngrx/store';
import { AppStore } from '../shared/store/app.store';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from './components/confirm-dialogue/confirm-dialogue.component';
import { QuestionsActions } from '../shared/store/questions/questions.actions';
import { filter, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss'],
})
export class QuestionManagementComponent {
  public questions$ = this.store.select(selectQuestions);

  constructor(
    private store: Store<AppStore>,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  onEdit(id: string): void {
    this.router.navigate([`/edit/${id}`]);
  }

  onDelete(id: string, title: string): void {
    this.dialog
      .open(ConfirmDialogueComponent, {
        data: { questionTitle: title },
      })
      .afterClosed()
      .pipe(
        filter((doDelete) => doDelete),
        take(1),
      )
      .subscribe(() =>
        this.store.dispatch(QuestionsActions.deleteQuestion({ id })),
      );
  }
}
