import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.component.html',
  styleUrls: ['./remove-category.component.scss'],
})
export class RemoveCategoryComponent {
  id: number = 0;

  constructor(public authService: AuthService) {}

  remove(id: number) {}
}
