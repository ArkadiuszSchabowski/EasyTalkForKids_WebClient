import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { AddLessonDto } from 'src/app/models/add/add-lesson-dto';
import { LessonError } from 'src/app/models/error/lesson-error';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss'],
})
export class AddLessonComponent {
  model: AddLessonDto = new AddLessonDto();
  errors: LessonError = new LessonError();

  constructor(public authService: AuthService, private toastr: ToastrService) {}

  createLesson(lessonForm: NgForm) {
    this.errors = new LessonError();

    if (!this.model.categoryId) {
      this.errors.categoryId = 'Id kategorii jest wymagane!';
    }

    if (!this.model.polishName) {
      this.errors.polishName = 'Polska nazwa jest wymagana!';
    }

    if (!this.model.englishName) {
      this.errors.englishName = 'Angielska nazwa jest wymagana!';
    }

    if (this.errors.polishName || this.errors.englishName) {
      return;
    }
    console.log(this.model);

    lessonForm.resetForm();

    this.toastr.success('Lekcja została dodana!');
  }
}
