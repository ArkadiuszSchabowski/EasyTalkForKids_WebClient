import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from 'src/app/components/public/home/home.component';
import { LandComponent } from 'src/app/components/public/land/land.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { RegisterComponent } from 'src/app/components/public/register/register.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    LandComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [HomeComponent, LandComponent, LoginComponent, RegisterComponent],
})
export class PublicModule {}
