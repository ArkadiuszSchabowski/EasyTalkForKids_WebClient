import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchDto } from 'src/app/models/search-dto';
import { SearchErrorDto } from 'src/app/models/search-error-dto';

@Component({
  selector: 'app-moderator-panel',
  templateUrl: './moderator-panel.component.html',
  styleUrls: ['./moderator-panel.component.scss'],
})
export class ModeratorPanelComponent {

  model: SearchDto = new SearchDto();
  errors: SearchErrorDto = new SearchErrorDto();

  types: any = [
    { value: 'steak-0', viewValue: 'Lekcja' },
    { value: 'pizza-1', viewValue: 'Kategoria' },
    { value: 'tacos-2', viewValue: 'Temat' },
    { value: 'tacos-2', viewValue: 'Słowo' },
  ];

  results: any;

  getResults(searchForm: NgForm) {
    this.errors = new SearchErrorDto();

    if (!this.model.type) {
      this.errors.type = 'Proszę wybrać typ wyszukiwania!';
    }

    if (this.errors.type) {
      return;
    }

    searchForm.resetForm();

    //TO DO

    // if (this.model.type == 'Lekcja') {
    //   this.results = [
    //     { value: 'steak-0', viewValue: 'Id' },
    //     { value: 'pizza-1', viewValue: 'Nazwa' },
    //     { value: 'tacos-2', viewValue: 'Temat' },
    //     { value: 'tacos-2', viewValue: 'Słowo' },
    //   ];
    // }

    // if (this.model.type == 'Kategoria') {
    // }

    // if (this.model.type == 'Temat') {
    // }

    // if (this.model.type == 'Słowo') {
    // }
  }
}
