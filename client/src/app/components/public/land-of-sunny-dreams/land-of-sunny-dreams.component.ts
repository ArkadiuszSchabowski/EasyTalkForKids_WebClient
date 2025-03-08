import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { GetService } from 'src/app/_services/get.service';
import { Lesson } from 'src/app/interfaces/lesson';

@Component({
  selector: 'app-land-of-sunny-dreams',
  templateUrl: './land-of-sunny-dreams.component.html',
  styleUrls: ['./land-of-sunny-dreams.component.scss'],
})
export class LandOfSunnyDreamsComponent implements OnInit, Lesson {
  title: string = 'Kraina słonecznych marzeń';
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
      case 91:
      case 92:
      case 96:
      case 97:
      case 103:
      case 104:
      case 106:
      case 107:
      case 115:
      case 116:
        this.router.navigateByUrl(`land/${this.landId}/vocabulary/${lessonId}`);
        break;
      case 93:
      case 101:
      case 108:
      case 113:
        this.router.navigateByUrl(`land/${this.landId}/theory/${lessonId}`);
        break;
      case 94:
      case 102:
      case 109:
      case 114:
        this.router.navigateByUrl(`land/${this.landId}/sentence/${lessonId}`);
        break;
      case 95:
      case 100:
      case 105:
        this.router.navigateByUrl(`land/${this.landId}/memory/${lessonId}`);
        break;
      case 98:
      case 99:
        this.router.navigateByUrl(`land/${this.landId}/dialogue/${lessonId}`);
        break;
      case 110:
      case 111:
      case 117:
        this.router.navigateByUrl(`land/${this.landId}/reading/${lessonId}`);
        break;
      case 112:
      case 118:
        this.router.navigateByUrl(`land/${this.landId}/listening/${lessonId}`);
        break;
      case 119:
      case 120:
        this.router.navigateByUrl(`land/${this.landId}/review/${lessonId}`);
        break;
    }
  }
}
