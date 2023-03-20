import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuroraButtonModule} from 'ngx-aurora-pattern-library';
import { IntroComponent } from './intro/intro.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavigationComponent,
    ButtonComponent
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
