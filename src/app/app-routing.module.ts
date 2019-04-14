import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MannschaftenModule } from "./mannschaften/mannschaften.module";
import { HomeModule } from './home/home.module';

const routes: Routes = [
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
