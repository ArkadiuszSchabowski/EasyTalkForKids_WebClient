import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/development';
import { GetLessonDto } from '../models/get/get-lesson-dto';
import { GetCategoryDto } from '../models/get/get-category-dto';
import { GetTopicDto } from '../models/get/get-topic-dto';
import { GetWordDto } from '../models/get/get-word-dto';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  landSubject = new BehaviorSubject<number>(1);
  landSubject$ = this.landSubject.asObservable();
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLesson(id: number){
    return this.http.get<GetLessonDto>(this.apiUrl + `lesson/${id}`);
  }

  getLessons(){
    return this.http.get<GetLessonDto[]>(this.apiUrl + 'lesson');
  }

  getWord(id: number){
    return this.http.get<GetWordDto>(this.apiUrl + `word/${id}`);
  }

  getWords(){
    return this.http.get<GetWordDto[]>(this.apiUrl + `word`);
  }

  getTopic(id: number){
    return this.http.get<GetTopicDto>(this.apiUrl + `topic/${id}`);
  }

  getTopics(){
    return this.http.get<GetTopicDto[]>(this.apiUrl + `topic`);
  }

  getCategory(id: number){
    return this.http.get<GetCategoryDto>(this.apiUrl + `category/${id}`);
  }

  getCategories(){
    return this.http.get<GetCategoryDto[]>(this.apiUrl + `category`);
  }
}