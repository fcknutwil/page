import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MannschaftComponent } from './mannschaft/mannschaft.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: ':id', component: MannschaftComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MannschaftenRoutingModule { }