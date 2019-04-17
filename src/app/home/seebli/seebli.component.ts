import { Component, OnInit } from '@angular/core';
import { SeebliService } from './seebli.service';

@Component({
  selector: 'app-seebli',
  templateUrl: './seebli.component.html',
  styleUrls: ['./seebli.component.scss']
})
export class SeebliComponent implements OnInit {

  offen: boolean;

  constructor(private service: SeebliService) { }

    ngOnInit() {
      this.service.load().subscribe(data => {
        this.offen = data.offen;
      });
  }

}
