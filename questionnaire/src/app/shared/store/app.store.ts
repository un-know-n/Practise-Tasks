import { IQuestionsState } from './questions/questions.reducer';

export interface AppStore {
  questions: IQuestionsState;
}
