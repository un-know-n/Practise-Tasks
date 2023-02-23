import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EngineerFormModule } from './components/engineer-form/engineer-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EngineerFormModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
