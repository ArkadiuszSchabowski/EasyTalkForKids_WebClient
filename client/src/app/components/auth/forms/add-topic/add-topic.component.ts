import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { AddTopicDto } from 'src/app/models/add/add-topic-dto';
import { TopicError } from 'src/app/models/error/topic-error';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss'],
})
export class AddTopicComponent {
  model: AddTopicDto = new AddTopicDto();
  errors: TopicError = new TopicError();

  constructor(public authService: AuthService) {}

  createTopic(topicForm: NgForm) {
    this.errors = new TopicError();

    if (!this.model.polishName) {
      this.errors.polishName = 'Polska nazwa tematu jest wymagana!';
    }
    if (!this.model.englishName) {
      this.errors.englishName = 'Angielska nazwa tematu jest wymagana!';
    }

    if (this.errors.polishName || this.errors.englishName) {
      return;
    }

    console.log(this.model);

    topicForm.resetForm();
  }
}
