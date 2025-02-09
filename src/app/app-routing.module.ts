import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'dash',component:DashboardComponent},
  {path:'dot/:id',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
