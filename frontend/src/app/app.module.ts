import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './view/loginpage/loginpage.component';
import { SignpageComponent } from './view/signpage/signpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SignpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
