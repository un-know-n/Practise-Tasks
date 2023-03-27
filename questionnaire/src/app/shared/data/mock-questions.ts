import { IQuestion } from '../models/questions';

export const mockQuestions: IQuestion[] = [
  {
    id: '9z6FHObCDkfElqwfTFtn4',
    options: ['First', 'Second', 'third'],
    answer: null,
    type: 'multiple',
    title: 'Multiple Question',
    createdAt: '2023-03-25 17:28:13',
  },
  {
    id: '9z6FHObCDkfElqwfTFtn5',
    options: ['First', 'Second'],
    answer: null,
    type: 'single',
    title: 'Single question',
    createdAt: '2023-03-25 17:29:13',
  },
  {
    id: '9z6FHObCDkfElqwfTFtn6',
    answer: null,
    type: 'open',
    title: 'Open question',
    createdAt: '2023-03-25 17:30:13',
  },
];
