import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyReviewComponent } from './vocabulary-review.component';

describe('VocabularyReviewComponent', () => {
  let component: VocabularyReviewComponent;
  let fixture: ComponentFixture<VocabularyReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocabularyReviewComponent]
    });
    fixture = TestBed.createComponent(VocabularyReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
