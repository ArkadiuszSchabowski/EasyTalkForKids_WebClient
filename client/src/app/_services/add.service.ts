import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryDto } from '../models/add/add-category-dto';
import { environment } from '../environments/development';
import { AddLessonDto } from '../models/add/add-lesson-dto';
import { AddWordDto } from '../models/add/add-word-dto';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addCategory(dto: AddCategoryDto) {
    return this.http.post(this.apiUrl + "category", dto);
  }
  addLesson(dto: AddLessonDto){
    return this.http.post(this.apiUrl + "lesson", dto);
  }
  addWord(dto: AddWordDto){
    return this.http.post(this.apiUrl + "word", dto);
  }
}
