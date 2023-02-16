import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { StopwatchComponent } from './stopwatch.component';

@NgModule({
  declarations: [StopwatchComponent],
  exports: [StopwatchComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class StopwatchModule {}
