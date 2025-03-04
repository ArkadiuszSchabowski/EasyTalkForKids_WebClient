import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-moderator-remove-panel',
  templateUrl: './moderator-remove-panel.component.html',
  styleUrls: ['./moderator-remove-panel.component.scss']
})
export class ModeratorRemovePanelComponent {

  constructor(public authService: AuthService){

  }
}
