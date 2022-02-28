import { Component, OnInit } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PORSCHES} from "../shared/porsches";
import {PorscheService} from "../services/porsche.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public porsches!: Porsche[];

  // public porsches: Porsche[]=PORSCHES;
  public selectedPorsche!:Porsche
  constructor(private porscheService: PorscheService) { }

  ngOnInit(): void {
    this.porsches = this.porscheService.getPorsches();
  }

  public onSelect(porsche: Porsche):void{
    this.selectedPorsche=porsche
  }


}
