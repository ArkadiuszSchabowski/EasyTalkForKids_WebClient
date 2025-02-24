import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/development';
import { LessonDto } from '../models/lesson-dto';

@Injectable({
  providedIn: 'root',
})
export class LandService {
  landSubject = new BehaviorSubject<number>(1);
  landSubject$ = this.landSubject.asObservable();
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  lessonContent(lessonId: number){
    return this.http.get<LessonDto>(this.apiUrl + `lesson/${lessonId}`);
  }
}