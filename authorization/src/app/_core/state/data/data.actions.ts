import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  IAdminPanelItem,
  IAssessmentReport,
  IDashboardItem,
} from 'src/app/shared/models/data.model';

export const DataActions = createActionGroup({
  source: 'Data',
  events: {
    'Load Assessment': props<{ id: number | string }>(),
    'Load Assessment Success': props<{ assessment: IAssessmentReport }>(),
    'Load Assessment Element': props<{ assessmentElement: IDashboardItem }>(),
    'Load Dashboard': emptyProps(),
    'Load Dashboard Success': props<{ dashboard: IDashboardItem[] }>(),
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: IAdminPanelItem[] }>(),
    'Load Error': props<{ error: string }>(),
  },
});
