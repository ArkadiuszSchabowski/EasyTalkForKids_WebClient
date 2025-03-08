import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-moderator-remove-panel',
  templateUrl: './moderator-remove-panel.component.html',
  styleUrls: ['./moderator-remove-panel.component.scss'],
})
export class ModeratorRemovePanelComponent {
  isRemoveLessonForm = false;
  isRemoveCategoryForm = false;
  isRemoveTopicForm = false;
  isRemoveWordForm = false;

  id: number = 0;



  constructor(public authService: AuthService) {}

  showRemoveLessonForm(){
    this.isRemoveLessonForm = true;
    this.isRemoveCategoryForm = false;
    this.isRemoveTopicForm = false;
    this.isRemoveWordForm = false;
  }
  showRemoveCategoryForm(){
    this.isRemoveLessonForm = false;
    this.isRemoveCategoryForm = true;
    this.isRemoveTopicForm = false;
    this.isRemoveWordForm = false;
  }
  showRemoveTopicForm(){
    this.isRemoveLessonForm = false;
    this.isRemoveCategoryForm = false;
    this.isRemoveTopicForm = true;
    this.isRemoveWordForm = false;
  }
  showRemoveWordForm(){
    this.isRemoveLessonForm = false;
    this.isRemoveCategoryForm = false;
    this.isRemoveTopicForm = false;
    this.isRemoveWordForm = true;
  }
  showModeratorPanel(){
    this.isRemoveLessonForm = false;
    this.isRemoveCategoryForm = false;
    this.isRemoveTopicForm = false;
    this.isRemoveWordForm = false;
  }

  removeLesson(){

  }
  removeCategory(){
    
  }
  removeTopic(){
    
  }
  removeWord(){
    
  }
}