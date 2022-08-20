import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { AddstudentComponent } from './addstudent/addstudent.component';
// import { LoginComponent } from './home/login/login.component';
import { routingComponents } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
