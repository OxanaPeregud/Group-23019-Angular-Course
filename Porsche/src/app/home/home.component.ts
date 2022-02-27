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

  constructor(private porscheService: PorscheService) {
  }

  ngOnInit(): void {
    this.displayFeaturedPorsche();
  }

  private displayFeaturedPorsche():void{
    let porsches: Porsche[] = this.porscheService.getPorsches();
    let featuredPorsches: Porsche[] = this.porscheService.getFeaturedPorsches();
    if (featuredPorsches.length >=2){
      this.firstPromotion = featuredPorsches[0];
      this.secondPromotion = featuredPorsches[1];
    }else if(featuredPorsches.length == 1 ) {
      this.firstPromotion = featuredPorsches[0];
      this.secondPromotion = porsches[0]
    }else {
      this.firstPromotion = porsches[0];
      this.secondPromotion = porsches[1];
    }
  }
}
