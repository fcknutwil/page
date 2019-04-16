import { Component, OnInit } from '@angular/core';
import { MannschaftenService } from '../mannschaften.service';
import { Mannschaft } from 'src/app/types/mannschaft';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  mannschaften: Mannschaft[];

  constructor(private service: MannschaftenService) { }

  ngOnInit() {
    this.service.liste().subscribe(mannschaften => this.mannschaften = mannschaften);
  }

}
