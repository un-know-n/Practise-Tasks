import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
