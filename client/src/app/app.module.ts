import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LandComponent } from './components/public/land/land.component';
import { VocabularyComponent } from './components/lesson/vocabulary/vocabulary.component';
import { TheoryComponent } from './components/lesson/theory/theory.component';
import { MissingWordComponent } from './components/lesson/missing-word/missing-word.component';
import { VocabularyReviewComponent } from './components/lesson/vocabulary-review/vocabulary-review.component';
import { SentenceReviewComponent } from './components/lesson/sentence-review/sentence-review.component';
import { SentenceComponent } from './components/lesson/sentence/sentence.component';
import { DialogueComponent } from './components/lesson/dialogue/dialogue.component';
import { DialogueReviewComponent } from './components/lesson/dialogue-review/dialogue-review.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandComponent,
    VocabularyComponent,
    TheoryComponent,
    MissingWordComponent,
    VocabularyReviewComponent,
    SentenceReviewComponent,
    SentenceComponent,
    DialogueComponent,
    DialogueReviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
