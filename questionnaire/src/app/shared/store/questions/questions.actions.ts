import { createActionGroup, props } from '@ngrx/store';
import { IQuestion } from '../../models/questions';

export const QuestionsActions = createActionGroup({
  source: 'Questions',
  events: {
    'Create Question': props<{ question: IQuestion }>(),
    'Edit Question': props<{ question: IQuestion }>(),
    'Delete Question': props<{ id: string }>(),
    'Answer Question': props<{ answer: string[]; id: string }>(),
    'Revert Question': props<{ id: string }>(),
  },
});
