import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddService } from 'src/app/_services/add.service';
import { AuthService } from 'src/app/_services/auth.service';
import { AddCategoryDto } from 'src/app/models/add/add-category-dto';
import { CategoryError } from 'src/app/models/error/category-error';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  model: AddCategoryDto = new AddCategoryDto();
  errors: CategoryError = new CategoryError();

  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private addService: AddService
  ) {}

  createCategory(categoryForm: NgForm) {
    this.errors = new CategoryError();

    if (!this.model.polishName) {
      this.errors.polishName = 'Polska nazwa jest wymagana!';
    }

    if (!this.model.englishName) {
      this.errors.englishName = 'Angielska nazwa jest wymagana!';
    }

    if (this.errors.polishName || this.errors.englishName) {
      return;
    }

    this.addService.addCategory(this.model).subscribe({
      next: () => this.toastr.success('Kategoria została dodana!'),
      error: (error) => this.toastr.error(error.error),
    });

    categoryForm.resetForm();
  }
}
