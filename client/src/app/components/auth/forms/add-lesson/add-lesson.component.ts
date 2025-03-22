import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddService } from 'src/app/_services/add.service';
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

  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private addService: AddService
  ) {}

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

    if (this.errors.categoryId || this.errors.polishName || this.errors.englishName) {
      return;
    }

    this.addService.addLesson(this.model).subscribe({
      next: () => this.toastr.success('Lekcja została dodana!'),
      error: (error) => this.toastr.error(error.error),
    });

    lessonForm.resetForm();
  }
}
