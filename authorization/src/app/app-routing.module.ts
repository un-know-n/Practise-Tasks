import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AssessmentResolver } from './pages/assessment/assessment.resolver';
import { DashboardResolver } from './pages/dashboard/dashboard.resolver';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
        resolve: {
          dashboard: DashboardResolver,
        },
      },
      {
        path: 'admin-panel',
        component: AdminPanelComponent,
      },
      {
        path: 'assessment/:id',
        loadChildren: () =>
          import('./pages/assessment/assessment.module').then(
            (m) => m.AssessmentModule,
          ),
        resolve: {
          assessment: AssessmentResolver,
        },
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
