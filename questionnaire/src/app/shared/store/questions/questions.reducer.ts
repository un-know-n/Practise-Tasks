import { IQuestion } from '../../models/questions';
import { createReducer, on } from '@ngrx/store';
import { QuestionsActions } from './questions.actions';

export interface IQuestionsState {
  questions: IQuestion[];
  answeredQuestions: string[];
}

const initialState: IQuestionsState = {
  questions: [],
  answeredQuestions: [],
};

export const questionsReducer = createReducer(
  initialState,
  on(QuestionsActions.createQuestion, (state, { question }) => ({
    ...state,
    questions: [...state.questions, question],
  })),
  on(QuestionsActions.deleteQuestion, (state, { id }) => ({
    ...state,
    questions: state.questions.filter((question) => question.id !== id),
  })),
  on(QuestionsActions.editQuestion, (state, { question }) => ({
    ...state,
    questions: state.questions.map((innerQuestion) =>
      innerQuestion.id === question.id
        ? {
            ...question,
            answer: null,
          }
        : innerQuestion,
    ),
    answeredQuestions: state.answeredQuestions.filter(
      (answered) => answered !== question.id,
    ),
  })),
  on(QuestionsActions.answerQuestion, (state, { id, answer }) => ({
    ...state,
    questions: state.questions.map((question) =>
      question.id === id ? { ...question, answer } : question,
    ),
    answeredQuestions: [...state.answeredQuestions, id],
  })),
  on(QuestionsActions.revertQuestion, (state, { id }) => ({
    ...state,
    questions: state.questions.map((question) =>
      question.id === id ? { ...question, answer: null } : question,
    ),
    answeredQuestions: state.answeredQuestions.filter(
      (answered) => answered !== id,
    ),
  })),
);
