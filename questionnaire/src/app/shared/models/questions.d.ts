import { QUESTIONS_TYPES } from '../constants/questions';

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
export type TQuestionType = ArrayElement<typeof QUESTIONS_TYPES>;

export interface IQuestion {
  id: string;
  title: string;
  type: TQuestionType;
  options?: string[];
  answer: string[] | null;
  createdAt: string;
}
