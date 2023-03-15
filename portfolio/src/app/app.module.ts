import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuroraButtonModule} from 'ngx-aurora-pattern-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuroraButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
