import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceReviewComponent } from './sentence-review.component';

describe('SentenceReviewComponent', () => {
  let component: SentenceReviewComponent;
  let fixture: ComponentFixture<SentenceReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceReviewComponent]
    });
    fixture = TestBed.createComponent(SentenceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
