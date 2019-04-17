import { Component, OnInit } from '@angular/core';
import { Mannschaft } from 'src/app/types/mannschaft';
import { MannschaftenService } from '../mannschaften.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spielberichte',
  templateUrl: './spielberichte.component.html',
  styleUrls: ['./spielberichte.component.scss']
})
export class SpielberichteComponent implements OnInit {

  mannschaft: Mannschaft;

  constructor(private service: MannschaftenService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service.get(params.get('id')).subscribe(mannschaft => this.mannschaft = mannschaft);
    });
    
  }
}
