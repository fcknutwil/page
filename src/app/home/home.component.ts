import { Component, OnInit } from '@angular/core';

import { filter, map } from 'rxjs/operators'; 

import { Router, ActivatedRouteSnapshot, ActivatedRoute, RouteConfigLoadStart, ActivationStart, ChildActivationStart, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.setHomeContentIfRequired(this.router.url);
    this.router.events.pipe(filter(event => event instanceof NavigationStart), map((event: NavigationStart) => event.url)).subscribe(this.setHomeContentIfRequired);
    
  }

  private setHomeContentIfRequired(url: string): void {
    if(url === '/home') {
      this.router.navigate(['home', {outlets: { content: 'news' }}]);
    }
  }

}
