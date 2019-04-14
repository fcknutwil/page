import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { MannschaftComponent } from './mannschaft/mannschaft.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'mannschaften', component: ListComponent},
  { path: 'mannschaft/:id',      component: MannschaftComponent }
];

@NgModule({
  declarations: [ListComponent, MannschaftComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ]
})
export class MannschaftenModule { }
