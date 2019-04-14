import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { MannschaftComponent } from './mannschaft/mannschaft.component';
import { MannschaftenRoutingModule } from './mannschaften-routing.module';

@NgModule({
  declarations: [ListComponent, MannschaftComponent],
  imports: [
    MannschaftenRoutingModule
  ]
})
export class MannschaftenModule { }
