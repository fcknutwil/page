import { Component, OnInit } from '@angular/core';
import { MannschaftenService } from '../mannschaften.service';
import { Mannschaft } from 'src/app/types/mannschaft';

@Component({
  selector: 'app-mannschaften',
  templateUrl: './mannschaften.component.html',
  styleUrls: ['./mannschaften.component.scss']
})
export class MannschaftenComponent implements OnInit {

  mannschaften: Mannschaft[];
  
  constructor(private service: MannschaftenService) { }

  ngOnInit() {
    this.service.liste().subscribe(mannschaften => this.mannschaften = mannschaften);
  }
}
