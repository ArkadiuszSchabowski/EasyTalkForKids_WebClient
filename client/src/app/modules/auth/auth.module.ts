import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from 'src/app/auth-routing.module';

import { ModeratorSearchPanelComponent } from 'src/app/components/auth/moderator-search-panel/moderator-search-panel.component';
import { ModeratorAddPanelComponent } from 'src/app/components/auth/moderator-add-panel/moderator-add-panel.component';
import { ModeratorRemovePanelComponent } from 'src/app/components/auth/moderator-remove-panel/moderator-remove-panel.component';

import { AddLessonComponent } from 'src/app/components/auth/forms/add-lesson/add-lesson.component';
import { AddWordComponent } from 'src/app/components/auth/forms/add-word/add-word.component';
import { AddCategoryComponent } from 'src/app/components/auth/forms/add-category/add-category.component';

@NgModule({
  declarations: [
    ModeratorSearchPanelComponent,
    ModeratorAddPanelComponent,
    ModeratorRemovePanelComponent,
    AddCategoryComponent,
    AddLessonComponent,
    AddWordComponent,
  ],
  imports: [CommonModule, FormsModule, MaterialModule, AuthRoutingModule],
  exports: [
    ModeratorSearchPanelComponent,
    ModeratorAddPanelComponent,
    ModeratorRemovePanelComponent,
    AddCategoryComponent,
    AddLessonComponent,
    AddWordComponent,
  ],
})
export class AuthModule {}
