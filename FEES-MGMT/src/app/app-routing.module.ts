import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AdminComponent } from './admin/admin.component';
import { AllStudentsComponent } from './admin/all-students/all-students.component';
// import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent, 
  children: [
    {path:'login', component:LoginComponent},
  {path:'logout', canActivate: [AuthGuardService],component:HomeComponent}]},
  {path:'admin', component:AdminComponent, 
children:[
  {path:'addstudent', component:AddStudentComponent},
  {path:'allstudents', component:AllStudentsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  HomeComponent, LoginComponent, AddStudentComponent, AllStudentsComponent
]