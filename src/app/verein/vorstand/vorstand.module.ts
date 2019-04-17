import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VorstandComponent } from './vorstand.component';
import { PageModule } from 'src/app/page/page.module';
import { VorstandRoutingModule } from './vorstand-routing.module';

@NgModule({
  declarations: [VorstandComponent],
  imports: [
    PageModule,
    CommonModule,
    VorstandRoutingModule
  ]
})
export class VorstandModule { }
