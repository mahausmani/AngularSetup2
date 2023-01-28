import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { EditEmployComponent } from './edit-employ/edit-employ.component';
import { ViewEmployComponent } from './view-employ/view-employ.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmployComponent,
    EditEmployComponent,
    ViewEmployComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
