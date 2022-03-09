import { Component,Input, OnInit } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PorscheService} from "../services/porsche.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-porsche-detail',
  templateUrl: './porsche-detail.component.html',
  styleUrls: ['./porsche-detail.component.scss']
})
export class PorscheDetailComponent implements OnInit {

  public porsche!:Porsche;
  public porschesIds!: string[];
  public previousPorscheId!:string;
  public nextPorscheId!:string;

  constructor(private porscheService:PorscheService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getPorscheDetails();
  }
  private getPorscheDetails(): void {
    this.porscheService.getPorschesIds()
      .subscribe((porschesIds) => this.porschesIds = porschesIds);
    this.route.params.pipe(switchMap((params: Params) => this.porscheService.getPorsche(params['id'])))
      .subscribe(porsche => {
        this.porsche = porsche;
        this.setPreviousAndNextPorsche(porsche.id);
      });
  }

  public goBack():void{
    this.location.back()
  }
  private setPreviousAndNextPorsche(porscheId: string): void {
    const index: number = this.porschesIds?.indexOf(porscheId);
    this.previousPorscheId = this.porschesIds[(this.porschesIds.length + index - 1) % this.porschesIds.length];
    this.nextPorscheId = this.porschesIds[(this.porschesIds.length + index + 1) % this.porschesIds.length];
  }


}
