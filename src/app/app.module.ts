import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { HeroComponent } from './homepage/shared/components/hero/hero.component';
import { AboutComponent } from './homepage/shared/components/about/about.component';
import { ProjectsComponent } from './homepage/shared/components/projects/projects.component';
import { PriceComponent } from './homepage/shared/components/price/price.component';
import { ServicesComponent } from './homepage/shared/components/services/services.component';
import { ProcessComponent } from './homepage/shared/components/process/process.component';
import { ContactsComponent } from './homepage/shared/components/contacts/contacts.component';
import { FooterComponent } from './homepage/shared/components/footer/footer.component';
import { ProjectItemComponent } from './homepage/shared/components/projects/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    PriceComponent,
    ServicesComponent,
    ProcessComponent,
    ContactsComponent,
    FooterComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
