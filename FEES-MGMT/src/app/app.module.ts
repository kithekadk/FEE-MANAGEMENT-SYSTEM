import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { StudentservicesService } from './services/studentservices.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
