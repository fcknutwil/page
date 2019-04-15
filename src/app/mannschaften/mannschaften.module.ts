import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { MannschaftComponent } from './mannschaft/mannschaft.component';
import { MannschaftenRoutingModule } from './mannschaften-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent, MannschaftComponent],
  imports: [
    CommonModule,
    MannschaftenRoutingModule
  ]
})
export class MannschaftenModule { }
