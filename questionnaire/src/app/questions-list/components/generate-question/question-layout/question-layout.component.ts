import { Component, Input } from '@angular/core';
import { IQuestion } from '../../../../shared/models/questions';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-question-layout',
  templateUrl: './question-layout.component.html',
  styleUrls: ['./question-layout.component.scss'],
})
export class QuestionLayoutComponent {
  @Input() question!: IQuestion;

  constructor(public listService: ListService) {}
}
