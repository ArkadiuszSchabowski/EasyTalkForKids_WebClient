import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ModeratorSearchPanelComponent } from 'src/app/components/auth/moderator-search-panel/moderator-search-panel.component';



@NgModule({
  declarations: [
    ModeratorSearchPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ], exports: [
    ModeratorSearchPanelComponent
  ]
})
export class AuthModule { }
