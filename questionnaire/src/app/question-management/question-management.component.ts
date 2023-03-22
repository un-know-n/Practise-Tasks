import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import { selectQuestions } from '../shared/store/questions/questions.selectors';
import { Store } from '@ngrx/store';
import { AppStore } from '../shared/store/app.store';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from './components/confirm-dialogue/confirm-dialogue.component';
import { QuestionsActions } from '../shared/store/questions/questions.actions';

dayjs.extend(relativeTime);

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss'],
})
export class QuestionManagementComponent implements OnInit {
  public questions$ = this.store.select(selectQuestions);

  constructor(private store: Store<AppStore>, private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(dayjs().fromNow(true));
  }

  onDeleteQuestion(id: string, title: string) {
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
