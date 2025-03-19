import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLessonComponent } from './remove-lesson.component';

describe('RemoveLessonComponent', () => {
  let component: RemoveLessonComponent;
  let fixture: ComponentFixture<RemoveLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveLessonComponent]
    });
    fixture = TestBed.createComponent(RemoveLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
