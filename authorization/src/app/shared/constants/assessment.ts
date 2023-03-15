import { Color, ScaleType } from '@swimlane/ngx-charts';

export const defaultColorScheme: Color = {
  name: 'AssessmentScheme',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
};
