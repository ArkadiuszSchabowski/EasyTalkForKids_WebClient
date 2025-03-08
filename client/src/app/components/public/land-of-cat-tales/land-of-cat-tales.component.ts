import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { GetService } from 'src/app/_services/get.service';
import { Lesson } from 'src/app/interfaces/lesson';

@Component({
  selector: 'app-land-of-cat-tales',
  templateUrl: './land-of-cat-tales.component.html',
  styleUrls: ['./land-of-cat-tales.component.scss'],
})
export class LandOfCatTalesComponent implements OnInit, Lesson {
  title: string = 'Kraina kocich opowieści';
  landId: number = 0;

  constructor(private router: Router, private getService: GetService, public authService: AuthService) {}

  ngOnInit(): void {
    this.getLand();
  }

  getLand() {
    this.getService.landSubject$.subscribe({
      next: (response) => {
        this.landId = response;
      },
      error: (error) => console.log(error),
    });
  }

  lesson(lessonId: number): void {
    switch (lessonId) {
      case 61:
      case 62:
      case 66:
      case 67:
      case 73:
      case 74:
      case 76:
      case 77:
      case 85:
      case 86:
        this.router.navigateByUrl(`land/${this.landId}/vocabulary/${lessonId}`);
        break;
      case 63:
      case 71:
      case 78:
      case 83:
        this.router.navigateByUrl(`land/${this.landId}/theory/${lessonId}`);
        break;
      case 64:
      case 72:
      case 79:
      case 84:
        this.router.navigateByUrl(`land/${this.landId}/sentence/${lessonId}`);
        break;
      case 65:
      case 70:
      case 75:
        this.router.navigateByUrl(`land/${this.landId}/memory/${lessonId}`);
        break;
      case 68:
      case 69:
        this.router.navigateByUrl(`land/${this.landId}/dialogue/${lessonId}`);
        break;
      case 80:
      case 81:
      case 87:
        this.router.navigateByUrl(`land/${this.landId}/reading/${lessonId}`);
        break;
      case 82:
      case 88:
        this.router.navigateByUrl(`land/${this.landId}/listening/${lessonId}`);
        break;
      case 89:
      case 90:
        this.router.navigateByUrl(`land/${this.landId}/review/${lessonId}`);
        break;
    }
  }
}
