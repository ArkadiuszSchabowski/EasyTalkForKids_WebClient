import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LandService } from 'src/app/_services/land.service';
import { LessonDto } from 'src/app/models/lesson-dto';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss'],
})
export class VocabularyComponent implements OnInit {
  lessonId!: number;
  lessonContent: LessonDto = new LessonDto();
  isLessonStart: boolean = false;
  lessonProgress = 0;
  imageUrl = 'http://localhost:5000/';

  constructor(
    private landService: LandService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const lessonIdParam = params.get('lessonId');
      if (lessonIdParam) {
        this.lessonId = Number(lessonIdParam);
        this.getLessonContent(this.lessonId);
      }
    });
  }

  getLessonContent(lessonId: number) {
    this.landService.lessonContent(lessonId).subscribe({
      next: (response: LessonDto) => {
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