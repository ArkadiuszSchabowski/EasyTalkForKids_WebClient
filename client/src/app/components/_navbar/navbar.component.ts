import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isModeratorPanel: boolean | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkAuthPanel();
  }

  checkAuthPanel() {
    this.authService.moderatorPanelSubject$.subscribe({
      next: (response) => {
        this.isModeratorPanel = response;
      },
      error: (error) => console.log(error),
    });
  }
  setAuthPanelState() {
    if (this.isModeratorPanel == false) {
      this.authService.moderatorPanelSubject.next(true);
      
    } else {
      this.authService.moderatorPanelSubject.next(false)
    }
  }
}
