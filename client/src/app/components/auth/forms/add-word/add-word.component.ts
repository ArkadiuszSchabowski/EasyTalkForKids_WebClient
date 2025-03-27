import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddService } from 'src/app/_services/add.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AddWordDto } from 'src/app/models/add/add-word-dto';
import { WordError } from 'src/app/models/error/word-error';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent {
  model: AddWordDto = new AddWordDto();
  errors: WordError = new WordError();

  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private addService: AddService
  ) {}

  createWord(wordForm: NgForm) {
    this.errors = new WordError();

    if (!this.model.lessonId) {
      this.errors.lessonId = 'Id lekcji jest wymagane!';
    }

    if (!this.model.polishName) {
      this.errors.polishName = 'Polska nazwa jest wymagana!';
    }

    if (!this.model.englishName) {
      this.errors.englishName = 'Angielska nazwa jest wymagana!';
    }

    if (this.errors.lessonId || this.errors.polishName || this.errors.englishName) {
      return;
    }

    this.addService.addWord(this.model).subscribe({
      next: () => this.toastr.success('Słowo zostało dodane!')
    });

    wordForm.resetForm();
  }
}
