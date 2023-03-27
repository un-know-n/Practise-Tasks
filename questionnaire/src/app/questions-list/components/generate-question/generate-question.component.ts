import { Component, Input } from '@angular/core';
import { IQuestion } from '../../../shared/models/questions';

export type TOnAnswer = (id: string, answer: string[]) => void;
export type TOnRevert = (id: string) => void;

@Component({
  selector: 'app-generate-question',

  templateUrl: './generate-question.component.html',
  styleUrls: ['./generate-question.component.scss'],
})
export class GenerateQuestionComponent {
  @Input() question!: IQuestion;
}
