import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { LandComponent } from './components/public/land/land.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { LandOfFourPawsComponent } from './components/public/land-of-four-paws/land-of-four-paws.component';
import { LandOfFrozenWorldsComponent } from './components/public/land-of-frozen-worlds/land-of-frozen-worlds.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'land', component: LandComponent, children: [
      { path: 'land-of-four-paws', component: LandOfFourPawsComponent },
      { path: 'land-of-frozen-worlds', component: LandOfFrozenWorldsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
