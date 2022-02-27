import { Injectable } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PORSCHES} from "../shared/porsches";

@Injectable({
  providedIn: 'root'
})
export class PorscheService {

  constructor() { }

  public getPorsches():Porsche[]{
    return PORSCHES;
  }

  public getFeaturedPorsches():Porsche[]{
    return PORSCHES.filter(porsche => porsche.featured);
  }

  public getPorsche(id:string):Porsche{
    return PORSCHES.filter(porsche=>porsche.id === id)[0]
  }

}
