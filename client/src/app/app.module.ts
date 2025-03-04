import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/_navbar/navbar.component';
import { AuthModule } from './modules/auth/auth.module';
import { PublicModule } from './modules/public/public.module';
import { MaterialModule } from './modules/material/material.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModeratorComponent } from './components/auth/navbar-moderator/navbar-moderator.component';
import { ModeratorAddPanelComponent } from './components/auth/moderator-add-panel/moderator-add-panel.component';
import { ModeratorRemovePanelComponent } from './components/auth/moderator-remove-panel/moderator-remove-panel.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, NavbarModeratorComponent, ModeratorAddPanelComponent, ModeratorRemovePanelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    LessonModule,
    MaterialModule,
    PublicModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}