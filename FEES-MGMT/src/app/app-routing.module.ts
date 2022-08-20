import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AdminComponent } from './admin/admin.component';
// import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent, 
  children: [
    {path:'login', component:LoginComponent}]},
  {path:'admin', component:AdminComponent, 
children:[
  {path:'addstudent', component:AddStudentComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  HomeComponent, LoginComponent, AddStudentComponent
]