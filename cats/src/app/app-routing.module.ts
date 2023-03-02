import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatsComponent } from './components/cats/cats.component';
import { CatsResolver } from './components/cats/cats.resolver';

const routes: Routes = [
  {
    path: '',
    component: CatsComponent,
    resolve: {
      breeds: CatsResolver,
    },
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
