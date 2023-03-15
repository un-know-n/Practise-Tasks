import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './_core/guards/admin.guard';
import { AuthGuard } from './_core/guards/auth.guard';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
      {
        path: 'admin-panel',
        loadChildren: () =>
          import('./pages/admin-panel/admin-panel.module').then(
            (m) => m.AdminPanelModule,
          ),

        canActivate: [AdminGuard],
      },
      {
        path: 'assessment/:id',
        loadChildren: () =>
          import('./pages/assessment/assessment.module').then(
            (m) => m.AssessmentModule,
          ),
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
