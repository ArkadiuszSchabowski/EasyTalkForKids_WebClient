import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-remove-word',
  templateUrl: './remove-word.component.html',
  styleUrls: ['./remove-word.component.scss'],
})
export class RemoveWordComponent {
  id: number = 0;

  constructor(public authService: AuthService) {}

  remove(id: number) {}
}
