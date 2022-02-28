import { Component,Input, OnInit } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PorscheService} from "../services/porsche.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-porsche-detail',
  templateUrl: './porsche-detail.component.html',
  styleUrls: ['./porsche-detail.component.scss']
})
export class PorscheDetailComponent implements OnInit {

  public porsche!:Porsche;

  constructor(private porscheService:PorscheService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getPorscheDetail();
  }
  public getPorscheDetail():void{
    let id = this.route.snapshot.params['id'];
    this.porsche = this.porscheService.getPorsche(id)
  }

  public goBack():void{
    this.location.back()
  }

}
