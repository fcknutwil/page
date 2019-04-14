import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MannschaftenModule } from "./mannschaften/mannschaften.module";
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [HomeModule, MannschaftenModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
