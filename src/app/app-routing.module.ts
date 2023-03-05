import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { TempFormsComponent } from './temp-forms/temp-forms.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"reg1", component:TempFormsComponent},
  {path:"reg2", component:ReactFormsComponent},
  {path:"welcome", component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
