import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeuerPlatzRoutingModule } from './neuer-platz-routing.module';
import { NeuerPlatzComponent } from './neuer-platz/neuer-platz.component';

@NgModule({
  declarations: [NeuerPlatzComponent],
  imports: [
    CommonModule,
    NeuerPlatzRoutingModule
  ]
})
export class NeuerPlatzModule { }
