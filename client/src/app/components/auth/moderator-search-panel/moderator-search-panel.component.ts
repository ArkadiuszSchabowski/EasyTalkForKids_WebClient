import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { GetService } from 'src/app/_services/get.service';
import { GetCategoryDto } from 'src/app/models/get/get-category-dto';
import { GetLessonDto } from 'src/app/models/get/get-lesson-dto';
import { GetTopicDto } from 'src/app/models/get/get-topic-dto';
import { GetWordDto } from 'src/app/models/get/get-word-dto';

import { SearchDto } from 'src/app/models/search-dto';
import { SearchErrorDto } from 'src/app/models/error/search-error';

@Component({
  selector: 'app-moderator-panel',
  templateUrl: './moderator-search-panel.component.html',
  styleUrls: ['./moderator-search-panel.component.scss'],
})
export class ModeratorSearchPanelComponent {

  model: SearchDto = new SearchDto();
  errors: SearchErrorDto = new SearchErrorDto();

  lessons: GetLessonDto[] = [];
  categories: GetCategoryDto[] = [];
  topics: GetTopicDto[] = [];
  words: GetWordDto[] = [];

  types: any = [
    { value: 'lesson', viewValue: 'Lekcja' },
    { value: 'category', viewValue: 'Kategoria' },
    { value: 'topic', viewValue: 'Temat' },
    { value: 'word', viewValue: 'Słowo' },
  ];

  results: any[] = [];
  isModeratorPanel = false;

  constructor(
    private getService: GetService,
    public authService: AuthService
  ) {}

  onTypeChange(selectedType: string) {
    this.results = [];

    switch (selectedType) {
      case 'lesson':
        this.results = [
          { value: 'id', viewValue: 'Id' },
          { value: 'name', viewValue: 'Nazwa' },
        ];
        break;
      case 'category':
        this.results = [
          { value: 'id', viewValue: 'Id' },
          { value: 'Name', viewValue: 'Nazwa' },
        ];
        break;
      case 'topic':
        this.results = [
          { value: 'id', viewValue: 'Id' },
          { value: 'name', viewValue: 'Nazwa' },
        ];
        break;
      case 'word':
        this.results = [
          { value: 'id', viewValue: 'Id' },
          { value: 'word', viewValue: 'Nazwa' },
        ];
        break;
    }
  }

  getResults(searchForm: NgForm) {
    this.errors = new SearchErrorDto();

    if (!this.model.type) {
      this.errors.type = 'Proszę wybrać typ wyszukiwania!';
      return;
    }

    if (!this.model.searchBy) {
      this.errors.type = 'Proszę wybrać po czym należy szukać!';
      return;
    }

    if (!this.model.searchValue) {
      switch (this.model.type) {
        case 'lesson':
          this.getService.getLessons().subscribe({
            next: (response) => {
              this.lessons = response;
              console.log(response);
            },
            error: (error) => console.log(error),
          });
          break;
        case 'category':
          this.getService.getCategories().subscribe({
            next: (response) => {
              this.categories = response;
              console.log(response);
            },
            error: (error) => console.log(error),
          });
          break;
        case 'topic':
          this.getService.getTopics().subscribe({
            next: (response) => {
              this.topics = response;
              console.log(response);
            },
            error: (error) => console.log(error),
          });
          break;
        case 'word':
          this.getService.getWords().subscribe({
            next: (response) => {
              this.words = response;
              console.log(response);
            },
            error: (error) => console.log(error),
          });
          break;
      }
    }
  }
}
