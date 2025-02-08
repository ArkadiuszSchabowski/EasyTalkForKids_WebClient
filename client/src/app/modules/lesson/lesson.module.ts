import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogueComponent } from 'src/app/components/lesson/dialogue/dialogue.component';
import { DialogueReviewComponent } from 'src/app/components/lesson/dialogue-review/dialogue-review.component';
import { SentenceComponent } from 'src/app/components/lesson/sentence/sentence.component';
import { SentenceReviewComponent } from 'src/app/components/lesson/sentence-review/sentence-review.component';
import { TheoryComponent } from 'src/app/components/lesson/theory/theory.component';
import { VocabularyComponent } from 'src/app/components/lesson/vocabulary/vocabulary.component';
import { VocabularyReviewComponent } from 'src/app/components/lesson/vocabulary-review/vocabulary-review.component';

@NgModule({
  declarations: [
    DialogueComponent,
    DialogueReviewComponent,
    SentenceComponent,
    SentenceReviewComponent,
    TheoryComponent,
    VocabularyComponent,
    VocabularyReviewComponent,
  ],
  imports: [CommonModule],
  exports: [
    DialogueComponent,
    DialogueReviewComponent,
    SentenceComponent,
    SentenceReviewComponent,
    TheoryComponent,
    VocabularyComponent,
    VocabularyReviewComponent,
  ],
})
export class LessonModule {}
