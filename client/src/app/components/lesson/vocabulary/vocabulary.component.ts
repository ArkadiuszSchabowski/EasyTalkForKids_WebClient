import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { GetService } from 'src/app/_services/get.service';
import { GetLessonDto } from 'src/app/models/get/get-lesson-dto';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent implements OnInit {

  lessonId!: number;
  lessonContent: GetLessonDto = new GetLessonDto();
  isLessonStart: boolean = false;
  lessonProgress = 0;
  imageUrl = 'http://localhost:5000/';

  constructor(
    private getService: GetService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const lessonIdParam = params.get('lessonId');
      if (lessonIdParam) {
        this.lessonId = Number(lessonIdParam);
        this.getLesson(this.lessonId);
      }
    });
  }

  getLesson(lessonId: number) {
    this.getService.getLesson(lessonId).subscribe({
      next: (response: GetLessonDto) => {
        this.lessonContent = response;
        console.log(this.lessonContent)
      },
      error: (error) => console.log(error),
    });
  }

  userAnswer(answerForm: NgForm){
    
  }

  startLesson() {
    this.isLessonStart = !this.isLessonStart;
  }
}