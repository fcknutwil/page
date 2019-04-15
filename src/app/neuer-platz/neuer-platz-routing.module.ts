import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeuerPlatzComponent } from './neuer-platz/neuer-platz.component';

const routes: Routes = [
  { path: '', component: NeuerPlatzComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeuerPlatzRoutingModule { }
