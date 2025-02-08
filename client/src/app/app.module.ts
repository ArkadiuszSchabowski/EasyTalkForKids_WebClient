import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/_navbar/navbar.component';
import { PublicModule } from './modules/public/public.module';
import { LessonModule } from './modules/lesson/lesson.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, LessonModule, PublicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
