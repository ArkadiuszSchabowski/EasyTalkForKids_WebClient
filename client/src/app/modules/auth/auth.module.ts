import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorPanelComponent } from 'src/app/components/auth/moderator-panel/moderator-panel.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ModeratorPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ], exports: [
    ModeratorPanelComponent
  ]
})
export class AuthModule { }
