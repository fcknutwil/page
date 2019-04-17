import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: 'vorstand',
    loadChildren: './verein/vorstand/vorstand.module#VorstandModule'
  },
  {
    path: 'neuer-platz',
    loadChildren: './neuer-platz/neuer-platz.module#NeuerPlatzModule'
  },
  {
    path: 'mannschaften',
    loadChildren: './mannschaften/mannschaften.module#MannschaftenModule'
  },
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
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
