import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModeratorAddPanelComponent } from './components/auth/moderator-add-panel/moderator-add-panel.component';
import { ModeratorRemovePanelComponent } from './components/auth/moderator-remove-panel/moderator-remove-panel.component';
import { ModeratorSearchPanelComponent } from './components/auth/moderator-search-panel/moderator-search-panel.component';

import { AddTopicComponent } from './components/auth/forms/add-topic/add-topic.component';
import { AddLessonComponent } from './components/auth/forms/add-lesson/add-lesson.component';
import { AddWordComponent } from './components/auth/forms/add-word/add-word.component';


const routes: Routes = [
  { path: 'moderator-search-panel', component: ModeratorSearchPanelComponent },
  { path: 'moderator-remove-panel', component: ModeratorRemovePanelComponent },
  { path: 'moderator-add-panel', component: ModeratorAddPanelComponent },
  { path: 'moderator-add-panel/add-topic', component: AddTopicComponent },
  { path: 'moderator-add-panel/add-lesson', component: AddLessonComponent },
  { path: 'moderator-add-panel/add-word', component: AddWordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
