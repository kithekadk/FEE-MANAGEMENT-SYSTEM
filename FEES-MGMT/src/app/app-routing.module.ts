import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AdminComponent } from './admin/admin.component';
import { AllStudentsComponent } from './admin/all-students/all-students.component';
import { WithbalanceComponent } from './admin/withbalance/withbalance.component';
import { WithoutbalanceComponent } from './admin/withoutbalance/withoutbalance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'', component: NavbarComponent,
  children:[
    {path:'login', component: LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'logout' ,component:HomeComponent},
    {path:'admin', canActivate: [AuthGuardService], component:AdminComponent, 
children:[
  {path:'addstudent', component:AddStudentComponent},
  {path:'allstudents', component:AllStudentsComponent},
  {path:'withbalance', component:WithbalanceComponent},
  {path:'WObalance', component:WithoutbalanceComponent},
]},{path: '**', component: NotfoundComponent}
]}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  HomeComponent, LoginComponent, AddStudentComponent, AllStudentsComponent
]