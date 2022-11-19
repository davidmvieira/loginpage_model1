import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginpageComponent } from "./view/loginpage/loginpage.component";
import {SignpageComponent } from "./view/signpage/signpage.component";



const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'login', component: LoginpageComponent, title: "Login page" },
  { path: 'signin', component: SignpageComponent, title: "Sign page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
