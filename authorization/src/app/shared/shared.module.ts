import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorComponent } from './components/error/error.component';
import { LayoutModule } from './components/layout/layout.module';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [LoaderComponent, ErrorComponent],
  imports: [CommonModule, MaterialModule, LayoutModule],
  exports: [MaterialModule, LayoutModule, LoaderComponent, ErrorComponent],
})
export class SharedModule {}
