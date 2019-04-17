import { Component, OnInit } from '@angular/core';
import { VorstandService } from './vorstand.service';
import { Staff } from 'src/app/types/staff';

@Component({
  selector: 'app-vorstand',
  templateUrl: './vorstand.component.html',
  styleUrls: ['./vorstand.component.scss']
})
export class VorstandComponent implements OnInit {

  vorstand: Staff[];
  
  constructor(private service: VorstandService) { }

  ngOnInit() {
    this.service.liste().subscribe(vorstand => this.vorstand = vorstand);
  }

}
