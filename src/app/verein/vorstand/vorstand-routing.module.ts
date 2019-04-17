import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VorstandComponent } from './vorstand.component';

const routes: Routes = [
    { path: '', component: VorstandComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VorstandRoutingModule { }