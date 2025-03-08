import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { GetService } from 'src/app/_services/get.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss'],
})
export class LandComponent {
  constructor(
    private getService: GetService,
    private router: Router,
    public authService: AuthService
  ) {}

  setLand(landNumber: number) {
    this.getService.landSubject.next(landNumber);
    this.router.navigateByUrl(`/land/${landNumber}`);
  }
}
