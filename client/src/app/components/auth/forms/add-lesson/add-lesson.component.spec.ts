import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLessonComponent } from './add-lesson.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';

describe('AddLessonComponent', () => {
  let component: AddLessonComponent;
  let fixture: ComponentFixture<AddLessonComponent>;
  let toastrService: ToastrService;

  class MockToastrService {
    success(message: string) {
      console.log(message);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLessonComponent],
      imports: [
        ToastrModule,
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      providers: [{ provide: ToastrService, useClass: MockToastrService }],
    });
    fixture = TestBed.createComponent(AddLessonComponent);
    component = fixture.componentInstance;
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
