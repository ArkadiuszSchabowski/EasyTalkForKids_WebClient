import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { RegisterDto } from 'src/app/models/register';
import { RegisterErrorDto } from 'src/app/models/register-error';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  hidePassword = signal(true);
  hideRepeatPassword = signal(true);
  model: RegisterDto = new RegisterDto();
  errors: RegisterErrorDto = new RegisterErrorDto();

  constructor(private toastr: ToastrService,
    public authService: AuthService
  ) {}

  clickPassword(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

  clickRepeatPassword(event: MouseEvent) {
    this.hideRepeatPassword.set(!this.hideRepeatPassword());
    event.stopPropagation();
  }

  tryRegister(registerForm: NgForm) {
    this.errors = new RegisterErrorDto();

    if (!this.model.email) {
      this.errors.email = 'E-mail jest wymagany!';
    } else if (!this.isValidEmail(this.model.email)) {
      this.errors.email = 'Niepoprawny format e-maila!';
    }

    if (!this.model.password) {
      this.errors.password = 'Hasło jest wymagane!';
    }

    if (!this.model.repeatPassword) {
      this.errors.repeatPassword = 'Hasło jest wymagane!';
    } else if (this.model.password != this.model.repeatPassword) {
      this.errors.repeatPassword = 'Podane hasła są różne!';
    }

    if (
      this.errors.email ||
      this.errors.password ||
      this.errors.repeatPassword
    ) {
      return;
    }

    registerForm.resetForm();

    // TO DO - Implement API authentication and handle response

    this.toastr.success('Zarejestrowano pomyślnie!');
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}