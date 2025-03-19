import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { RemoveService } from 'src/app/_services/remove.service';

@Component({
  selector: 'app-moderator-remove-panel',
  templateUrl: './moderator-remove-panel.component.html',
  styleUrls: ['./moderator-remove-panel.component.scss'],
})
export class ModeratorRemovePanelComponent {
  selectedOption: string = '';
  formLabel: string = '';

  id: number = 0;

  constructor(
    public authService: AuthService,
    private removeService: RemoveService
  ) {}

  remove(option: string) {
    this.removeService.remove(this.id, option).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error.error),
    });
  }
}
