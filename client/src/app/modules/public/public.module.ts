import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from 'src/app/components/public/home/home.component';
import { LandComponent } from 'src/app/components/public/land/land.component';
import { LoginComponent } from 'src/app/components/public/login/login.component';
import { RegisterComponent } from 'src/app/components/public/register/register.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LandOfFourPawsComponent } from 'src/app/components/public/land-of-four-paws/land-of-four-paws.component';
import { LandOfFrozenWorldsComponent } from 'src/app/components/public/land-of-frozen-worlds/land-of-frozen-worlds.component';
import { LandOfCatTalesComponent } from 'src/app/components/public/land-of-cat-tales/land-of-cat-tales.component';
import { LandOfSunnyDreamsComponent } from 'src/app/components/public/land-of-sunny-dreams/land-of-sunny-dreams.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandComponent,
    LoginComponent,
    RegisterComponent,
    LandOfFourPawsComponent,
    LandOfFrozenWorldsComponent,
    LandOfSunnyDreamsComponent,
    LandOfCatTalesComponent,
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, MaterialModule],
  exports: [
    HomeComponent,
    LandComponent,
    LoginComponent,
    RegisterComponent,
    LandOfFourPawsComponent,
    LandOfFrozenWorldsComponent,
    LandOfSunnyDreamsComponent,
    LandOfCatTalesComponent,
  ],
})
export class PublicModule {}
