import { Component, OnInit } from '@angular/core';
import { HeimspieleService } from './heimspiele.service';
import { Spieltag } from 'src/app/types/spieltap';
import { Spiel } from 'src/app/types/spiel';

@Component({
  selector: 'app-heimspiele',
  templateUrl: './heimspiele.component.html',
  styleUrls: ['./heimspiele.component.scss']
})
export class HeimspieleComponent implements OnInit {
  datum1: string;
  spiele1: Spiel[];
  datum2: string;
  spiele2: Spiel[];

  constructor(private service: HeimspieleService) { }

  ngOnInit() {
    this.service.load().subscribe(data => {
      this.datum1 = data[0].datum;
      this.spiele1 = data[0].spiele;
      this.datum2 = data[1].datum;
      this.spiele2 = data[1].spiele;
    });
  }

}
