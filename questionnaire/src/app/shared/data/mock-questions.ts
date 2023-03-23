import { IQuestion } from '../models/questions';

export const mockQuestions: IQuestion[] = [
  {
    id: '9z6FHObCDkfElqwfTFtn4',
    options: ['First', 'Second', 'third'],
    answer: null,
    type: 'multiple',
    title: 'Multiple Question',
    createdAt: 'Wed, 22 Mar 2023 19:56:11 GMT',
  },
  {
    id: '9z6FHObCDkfElqwfTFtn5',
    options: ['First', 'Second'],
    answer: null,
    type: 'single',
    title: 'Single question',
    createdAt: 'Wed, 22 Mar 2023 18:56:11 GMT',
  },
  {
    id: '9z6FHObCDkfElqwfTFtn6',
    answer: null,
    type: 'open',
    title: 'Open question',
    createdAt: 'Wed, 22 Mar 2023 17:56:11 GMT',
  },
];

