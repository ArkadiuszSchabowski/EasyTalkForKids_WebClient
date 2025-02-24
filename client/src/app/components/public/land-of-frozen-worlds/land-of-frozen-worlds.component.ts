import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandService } from 'src/app/_services/land.service';

@Component({
  selector: 'app-land-of-frozen-worlds',
  templateUrl: './land-of-frozen-worlds.component.html',
  styleUrls: ['./land-of-frozen-worlds.component.scss'],
})
export class LandOfFrozenWorldsComponent implements OnInit {
  title: string = 'Kraina zamarzniętych słów';
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
      case 31:
      case 32:
      case 33:
      case 36:
      case 37:
      case 38:
      case 41:
      case 42:
      case 43:
      case 46:
      case 47:
      case 48:
      case 51:
      case 52:
      case 53:
      case 56:
      case 57:
      case 58:
        this.router.navigateByUrl(`land/${this.landId}/vocabulary/${lessonId}`);
        break;

      case 34:
      case 44:
        this.router.navigateByUrl(`land/${this.landId}/theory/${lessonId}`);
        break;

      case 35:
      case 45:
        this.router.navigateByUrl(`land/${this.landId}/sentence/${lessonId}`);
        break;

      case 39:
      case 40:
      case 49:
      case 50:
      case 59:
        this.router.navigateByUrl(`land/${this.landId}/dialogue/${lessonId}`);
        break;

      case 54:
      case 55:
        this.router.navigateByUrl(`land/${this.landId}/reading/${lessonId}`);
        break;

      case 60:
        this.router.navigateByUrl(
          `land/${this.landId}/vocabulary-review/${lessonId}`
        );
        break;
    }
  }
}
