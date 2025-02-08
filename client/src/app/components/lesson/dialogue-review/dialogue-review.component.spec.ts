import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueReviewComponent } from './dialogue-review.component';

describe('DialogueReviewComponent', () => {
  let component: DialogueReviewComponent;
  let fixture: ComponentFixture<DialogueReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogueReviewComponent]
    });
    fixture = TestBed.createComponent(DialogueReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
