import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isModeratorPanel = false;

  constructor(private authService: AuthService){

  }

  ngOnInit(): void {
    this.checkAuthPanel();
  }

  checkAuthPanel() {
    this.authService.moderatorPanelSubject$.subscribe({
      next: response => {
        this.isModeratorPanel = response
      },
      error: error => console.log(error)
    })
  }

}