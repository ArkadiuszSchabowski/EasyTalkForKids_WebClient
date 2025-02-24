import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandService } from 'src/app/_services/land.service';
import { BaseLesson } from 'src/app/interfaces/base-lesson';

@Component({
  selector: 'app-land-of-sunny-dreams',
  templateUrl: './land-of-sunny-dreams.component.html',
  styleUrls: ['./land-of-sunny-dreams.component.scss'],
})
export class LandOfSunnyDreamsComponent implements OnInit, BaseLesson {
  title: string = 'Kraina słonecznych marzeń';
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
      // TO DO
      // case 1:
      // case 2:
      // case 3:
      // case 6:
      // case 7:
      // case 8:
      // case 11:
      // case 12:
      // case 13:
      // case 16:
      // case 17:
      // case 18:
      // case 21:
      // case 22:
      // case 23:
      // case 26:
      // case 27:
      // case 28:
      //   this.router.navigateByUrl(
      //     `land/${this.landId}/vocabulary/${lessonId}`
      //   );
      //   break;
      // case 4:
      // case 9:
      // case 14:
      // case 19:
      //   this.router.navigateByUrl(`land/${this.landId}/theory/${lessonId}`);
      //   break;
      // case 5:
      // case 10:
      // case 15:
      // case 20:
      //   this.router.navigateByUrl(
      //     `land/${this.landId}/sentence/${lessonId}`
      //   );
      //   break;
      // case 24:
      // case 29:
      //   this.router.navigateByUrl(
      //     `land/${this.landId}/vocabulary-review/${lessonId}`
      //   );
      //   break;
      // case 25:
      // case 30:
      //   this.router.navigateByUrl(
      //     `land/${this.landId}/sentence-review/${lessonId}`
      //   );
      //   break;
    }
  }
}
