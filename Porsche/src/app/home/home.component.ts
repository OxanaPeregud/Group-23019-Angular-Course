import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PorscheService} from "../services/porsche.service";
import {flyIn} from "../animations/app.animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    '[@flyIn]':'true',
    'style':'display:block;'
  },
  animations:[
    flyIn()
  ]
})
export class HomeComponent implements OnInit {

  public firstPromotion!:Porsche;
  public secondPromotion!:Porsche;
  private porsches!:Porsche[];
  private featuredPorsches!:Porsche[];

  constructor(@Inject('BaseURL') public BaseURL: string,
              private porscheService: PorscheService) {
  }

  ngOnInit(): void {
    this.setPromotionPorsches();
  }

  private setFeaturedPorsches(): void{
    this.porscheService.getFeaturedPorsches()
      .subscribe(featuredPorsches=>{
        this.featuredPorsches = featuredPorsches;
        this.displayFeaturedPorsches()
      })
  }

  private setPromotionPorsches(){
    this.porscheService.getPorsches()
      .subscribe(porsches => {
        this.porsches = porsches
        this.setFeaturedPorsches()
      })
 }

  private displayFeaturedPorsches():void{
    if (this.featuredPorsches.length >=2){
      this.firstPromotion = this.featuredPorsches[0];
      this.secondPromotion = this.featuredPorsches[1];
    }else if(this.featuredPorsches.length == 1 ) {
      this.firstPromotion = this.featuredPorsches[0];
      this.secondPromotion = this.porsches[0]
    }else {
      this.firstPromotion = this.porsches[0];
      this.secondPromotion = this.porsches[1];
    }
  }



}
