import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MannschaftenRoutingModule } from './mannschaften-routing.module';
import { MannschaftComponent } from './mannschaft/mannschaft.component';
import { MannschaftenComponent } from './mannschaften/mannschaften.component';
import { SpielberichteComponent } from './spielberichte/spielberichte.component';
import { PageModule } from '../page/page.module';

@NgModule({
  declarations: [MannschaftenComponent, MannschaftComponent, SpielberichteComponent],
  imports: [
    PageModule,
    CommonModule,
    MannschaftenRoutingModule
  ]
})
export class MannschaftenModule { }
