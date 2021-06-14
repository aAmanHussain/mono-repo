import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WkClassesLibModule } from 'projects/wk-classes-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WkClassesLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
