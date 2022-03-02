import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarroComponent } from './componentes/carro/carro.component';
import { HomeComponent } from './componentes/home/home.component';
import { Home2Component } from './componentes/home2/home2.component';
import { ErrorPageComponent } from './componentes/error-page/error-page.component';
import { AuthwardService } from './services/authward.service';
@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    HomeComponent,
    Home2Component,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthwardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
