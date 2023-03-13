import { IAssessmentReport, IBarFormat } from '../models/data.model';

export const transformAssessmentObject = (
  payload: IAssessmentReport | null,
): IBarFormat[] => {
  if (!payload) return [];

  const result = [];
  for (const [key, value] of Object.entries(payload.data)) {
    result.push({
      name: key,
      value: value,
    });
  }

  return result;
};
