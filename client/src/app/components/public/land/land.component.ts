import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { LandService } from 'src/app/_services/land.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss'],
})
export class LandComponent {
  constructor(
    private landService: LandService,
    private router: Router,
    public authService: AuthService
  ) {}

  setLand(landNumber: number) {
    this.landService.landSubject.next(landNumber);
    this.router.navigateByUrl(`/land/${landNumber}`);
  }
}
