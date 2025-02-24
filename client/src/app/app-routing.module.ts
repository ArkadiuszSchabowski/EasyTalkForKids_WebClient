import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { LandComponent } from './components/public/land/land.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LandOfFourPawsComponent } from './components/public/land-of-four-paws/land-of-four-paws.component';
import { LandOfFrozenWorldsComponent } from './components/public/land-of-frozen-worlds/land-of-frozen-worlds.component';
import { LandOfCatTalesComponent } from './components/public/land-of-cat-tales/land-of-cat-tales.component';
import { LandOfSunnyDreamsComponent } from './components/public/land-of-sunny-dreams/land-of-sunny-dreams.component';
import { DialogueComponent } from './components/lesson/dialogue/dialogue.component';
import { SentenceComponent } from './components/lesson/sentence/sentence.component';
import { TheoryComponent } from './components/lesson/theory/theory.component';
import { VocabularyComponent } from './components/lesson/vocabulary/vocabulary.component';
import { VocabularyReviewComponent } from './components/lesson/vocabulary-review/vocabulary-review.component';
import { ReadingComponent } from './components/lesson/reading/reading.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'land', component: LandComponent },
  { path: 'land/1', component: LandOfFourPawsComponent },
  { path: 'land/2', component: LandOfFrozenWorldsComponent },
  { path: 'land/3', component: LandOfCatTalesComponent },
  { path: 'land/4', component: LandOfSunnyDreamsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'land/:landId/dialogue/:lessonId', component: DialogueComponent },
  { path: 'land/:landId/sentence/:lessonId', component: SentenceComponent },
  { path: 'land/:landId/theory/:lessonId', component: TheoryComponent },
  { path: 'land/:landId/vocabulary/:lessonId', component: VocabularyComponent },
  { path: 'land/:landId/vocabulary-review/:lessonId', component: VocabularyReviewComponent },
  {path: 'land/:landId/reading/:lessonId', component: ReadingComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
