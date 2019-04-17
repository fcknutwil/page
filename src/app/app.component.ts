import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingSpinnerService } from './loading-spinner/loading-spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loading$: Observable<boolean>;
  
  constructor(public loaderService: LoadingSpinnerService) { }
  ngOnInit(): void {
    this.loading$ = this.loaderService.getLoadingObservable();
  }
  
}
