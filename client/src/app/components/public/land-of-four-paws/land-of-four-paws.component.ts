import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandService } from 'src/app/_services/land.service';
import { Lesson } from 'src/app/interfaces/lesson';
import { WordDto } from 'src/app/models/word-dto';

@Component({
  selector: 'app-land-of-four-paws',
  templateUrl: './land-of-four-paws.component.html',
  styleUrls: ['./land-of-four-paws.component.scss'],
})
export class LandOfFourPawsComponent implements OnInit, Lesson {
  title: string = 'Kraina czterech łapek';
  words: WordDto[] = [];
  landId: number = 0;

  constructor(private router: Router, private landService: LandService) {}

  ngOnInit(): void {
    this.getLand();
  }

  getLand() {
    this.landService.landSubject$.subscribe({
      next: (response) => {
        this.landId = response;
      },
      error: (error) => console.log(error),
    });
  }

  lesson(lessonId: number): void {
    switch (lessonId) {
      case 1:
      case 2:
      case 6:
      case 7:
      case 13:
      case 14:
      case 16:
      case 17:
      case 25:
      case 26:
        this.router.navigateByUrl(`land/${this.landId}/vocabulary/${lessonId}`);
        break;
      case 3:
      case 11:
      case 18:
      case 23:
        this.router.navigateByUrl(`land/${this.landId}/theory/${lessonId}`);
        break;
      case 4:
      case 12:
      case 19:
      case 24:
        this.router.navigateByUrl(`land/${this.landId}/sentence/${lessonId}`);
        break;
      case 5:
      case 10:
      case 15:
        this.router.navigateByUrl(`land/${this.landId}/memory/${lessonId}`);
        break;
      case 8:
      case 9:
        this.router.navigateByUrl(`land/${this.landId}/dialogue/${lessonId}`);
        break;
      case 20:
      case 21:
      case 27:
        this.router.navigateByUrl(`land/${this.landId}/reading/${lessonId}`);
        break;
      case 22:
      case 28:
        this.router.navigateByUrl(`land/${this.landId}/listening/${lessonId}`);
        break;
      case 29:
      case 30:
        this.router.navigateByUrl(`land/${this.landId}/review/${lessonId}`);
        break;
    }
  }
}
