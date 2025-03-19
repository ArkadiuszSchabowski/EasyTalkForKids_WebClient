import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLessonComponent } from './remove-lesson.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';

describe('RemoveLessonComponent', () => {
  let component: RemoveLessonComponent;
  let fixture: ComponentFixture<RemoveLessonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveLessonComponent],
      imports: [FormsModule, MaterialModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(RemoveLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
