import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarroComponent } from './componentes/carro/carro.component';
import { HomeComponent } from './componentes/home/home.component';
import { Home2Component } from './componentes/home2/home2.component';
import { ErrorPageComponent } from './componentes/error-page/error-page.component';
import { AuthwardService } from './services/authward.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailsComponent } from './componentes/pokemon-details/pokemon-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import { Home3Component } from './componentes/home3/home3.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CarroComponent,
    HomeComponent,
    Home2Component,
    ErrorPageComponent,
    PokemonDetailsComponent,
    Home3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthwardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
