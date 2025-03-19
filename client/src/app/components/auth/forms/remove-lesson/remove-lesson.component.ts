import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-remove-lesson',
  templateUrl: './remove-lesson.component.html',
  styleUrls: ['./remove-lesson.component.scss'],
})
export class RemoveLessonComponent {
  id: number = 0;

  constructor(public authService: AuthService) {}

  remove(id: number) {}
}
