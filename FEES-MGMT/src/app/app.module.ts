import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { StudentservicesService } from './services/studentservices.service';
import { NavbarComponent } from './navbar/navbar.component';
import { WithbalanceComponent } from './admin/withbalance/withbalance.component';
import { WithoutbalanceComponent } from './admin/withoutbalance/withoutbalance.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchPipe } from './pipes/search.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { SalutationPipe } from './pipes/salutation.pipe';
import { ContainerDirective } from './directives/container.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdminComponent,
    NavbarComponent,
    WithbalanceComponent,
    WithoutbalanceComponent,
    NotfoundComponent,
    SearchPipe,
    ShortenPipe,
    SalutationPipe,
    ContainerDirective,
    

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
