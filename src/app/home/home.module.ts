import { NewsComponent } from "./news/news.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { AgendaComponent } from "./agenda/agenda.component";
import { HeimspieleComponent } from "./heimspiele/heimspiele.component";
import { SeebliComponent } from "./seebli/seebli.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent, AgendaComponent, NewsComponent, HeimspieleComponent, SeebliComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
