import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MannschaftenComponent } from './mannschaften/mannschaften.component';
import { MannschaftComponent } from './mannschaft/mannschaft.component';
import { SpielberichteComponent } from './spielberichte/spielberichte.component';

const routes: Routes = [
    { path: '', component: MannschaftenComponent },
    { path: ':id', component: MannschaftComponent },
    { path: ':id/spielberichte', component: SpielberichteComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MannschaftenRoutingModule { }