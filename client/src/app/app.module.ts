import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/_navbar/navbar.component';
import { PublicModule } from './modules/public/public.module';
import { MaterialModule } from './modules/material/material.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, LessonModule, MaterialModule, PublicModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}