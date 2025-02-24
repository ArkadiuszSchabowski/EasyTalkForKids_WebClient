import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { DialogueComponent } from 'src/app/components/lesson/dialogue/dialogue.component';
import { ReadingComponent } from 'src/app/components/lesson/reading/reading.component';
import { SentenceComponent } from 'src/app/components/lesson/sentence/sentence.component';
import { TheoryComponent } from 'src/app/components/lesson/theory/theory.component';
import { VocabularyReviewComponent } from 'src/app/components/lesson/vocabulary-review/vocabulary-review.component';
import { VocabularyComponent } from 'src/app/components/lesson/vocabulary/vocabulary.component';

@NgModule({
  declarations: [
    DialogueComponent,
    ReadingComponent,
    SentenceComponent,
    TheoryComponent,
    VocabularyComponent,
    VocabularyReviewComponent,
  ],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [
    DialogueComponent,
    ReadingComponent,
    SentenceComponent,
    TheoryComponent,
    VocabularyComponent,
    VocabularyReviewComponent,
  ],
})
export class LessonModule {}
