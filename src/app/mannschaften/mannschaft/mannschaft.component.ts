import { Component, OnInit } from '@angular/core';
import { Mannschaft } from 'src/app/types/mannschaft';
import { MannschaftenService } from '../mannschaften.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mannschaft',
  templateUrl: './mannschaft.component.html',
  styleUrls: ['./mannschaft.component.scss']
})
export class MannschaftComponent implements OnInit {

  mannschaft: Mannschaft;

  constructor(private service: MannschaftenService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service.get(params.get('id')).subscribe(mannschaft => this.mannschaft = mannschaft);
    });
    
  }

}
