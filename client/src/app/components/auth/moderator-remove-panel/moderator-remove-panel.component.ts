import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { RemoveService } from 'src/app/_services/remove.service';

@Component({
  selector: 'app-moderator-remove-panel',
  templateUrl: './moderator-remove-panel.component.html',
  styleUrls: ['./moderator-remove-panel.component.scss'],
})
export class ModeratorRemovePanelComponent {
  isForm = false;
  selectedOption: string = '';
  formLabel: string = '';

  id: number = 0;

  constructor(
    public authService: AuthService,
    private removeService: RemoveService
  ) {}

  showForm(option: string) {
    console.log('Hej');
    if (option == 'lesson') {
      this.selectedOption = 'lesson';
      this.formLabel = 'lekcję';
    }
    if (option == 'category') {
      this.selectedOption = 'category';
      this.formLabel = 'kategorię';
    }
    if (option == 'topic') {
      this.selectedOption = 'topic';
      this.formLabel = 'temat';
    }
    if (option == 'word') {
      this.selectedOption = 'word';
      this.formLabel = 'słowo';
    }
    this.isForm = true;
  }
  showModeratorPanel() {
    this.isForm = false;
  }

  remove(option: string) {
    this.removeService.remove(this.id, option).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error.error),
    });
  }
}
