import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { CatsComponent } from './cats.component';
import { CatsInterceptor } from './cats.interceptor';

@NgModule({
  declarations: [CatsComponent],
  exports: [CatsComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CatsInterceptor, multi: true },
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
})
export class CatsModule {}
