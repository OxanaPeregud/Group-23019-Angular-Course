import { Component, OnInit } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PorscheService} from "../services/porsche.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public firstPromotion!:Porsche;
  public secondPromotion!:Porsche;
  private porsches!:Porsche[];
  private featuredPorsches!:Porsche[];

  constructor(private porscheService: PorscheService) {
  }

  ngOnInit(): void {
    this.setPromotionPorsches().then(()=>{
      this.displayFeaturedPorsches()
    })
  }

  private async setPromotionPorsches(){
    this.porscheService.getPorsches()
      .subscribe(porsches => this.porsches = porsches)
    this.porscheService.getFeaturedPorsches()
      .subscribe(featuredPorsches => this.featuredPorsches =featuredPorsches)
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
