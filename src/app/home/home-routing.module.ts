import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';
import { AgendaComponent } from './agenda/agenda.component';
import { HeimspieleComponent } from './heimspiele/heimspiele.component';
import { SeebliComponent } from './seebli/seebli.component';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      children: [{
        path: 'news',
        component: NewsComponent,
        outlet: 'content'
      }, {
        path: 'agenda',
        component: AgendaComponent,
        outlet: 'content'
      }, {
        path: 'heimspiele',
        component: HeimspieleComponent,
        outlet: 'content'
      }, {
        path: 'seebli',
        component: SeebliComponent,
        outlet: 'content'
      }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }