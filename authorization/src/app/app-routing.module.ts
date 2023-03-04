import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'admin-panel',
        component: AdminPanelComponent,
      },
      {
        path: 'assessment/:id',
        component: AssessmentComponent,
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
