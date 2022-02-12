import { Component, OnInit } from '@angular/core';
import {Tea} from "../shared/tea";
import {Teas} from '../shared/teas';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.scss']
})
export class TeaListComponent implements OnInit {

  public teas = Teas;

  public selectedTea!: Tea;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(tea: Tea): void{
    this.selectedTea = tea;
  }

}
