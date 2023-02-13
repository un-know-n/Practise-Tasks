import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StopwatchModule } from './components/stopwatch/stopwatch.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, StopwatchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
