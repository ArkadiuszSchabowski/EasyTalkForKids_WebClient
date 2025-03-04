import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-moderator-add-panel',
  templateUrl: './moderator-add-panel.component.html',
  styleUrls: ['./moderator-add-panel.component.scss'],
})
export class ModeratorAddPanelComponent {
  constructor(public authService: AuthService) {}
}
