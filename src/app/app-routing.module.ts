import { ErrorPageComponent } from './componentes/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { Home2Component } from './componentes/home2/home2.component';
import { AuthwardService } from './services/authward.service';

const routes: Routes = [
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'Home2', component: Home2Component,
  },
  {
    path: '**', component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
