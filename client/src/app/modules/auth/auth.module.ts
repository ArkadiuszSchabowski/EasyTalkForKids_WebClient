import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ModeratorSearchPanelComponent } from 'src/app/components/auth/moderator-search-panel/moderator-search-panel.component';
import { ModeratorAddPanelComponent } from 'src/app/components/auth/moderator-add-panel/moderator-add-panel.component';
import { ModeratorRemovePanelComponent } from 'src/app/components/auth/moderator-remove-panel/moderator-remove-panel.component';



@NgModule({
  declarations: [
    ModeratorSearchPanelComponent,
    ModeratorAddPanelComponent, 
    ModeratorRemovePanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ], exports: [
    ModeratorSearchPanelComponent,
    ModeratorAddPanelComponent,
    ModeratorRemovePanelComponent
  ]
})
export class AuthModule { }
