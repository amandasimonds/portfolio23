import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './sections/intro/intro.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './sections/about/about.component';
import { WorkExperienceComponent } from './sections/work-experience/work-experience.component';
import { FooterComponent } from './sections/footer/footer.component';
import { WorkComponent } from './sections/work/work.component';
import { SvgComponent } from './components/svg/svg.component';
import { TabComponent } from './components/tab/tab.component';
import { MoreWorkComponent } from './sections/more-work/more-work.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavigationComponent,
    ButtonComponent,
    CardComponent,
    AboutComponent,
    WorkExperienceComponent,
    FooterComponent,
    WorkComponent,
    SvgComponent,
    TabComponent,
    MoreWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
