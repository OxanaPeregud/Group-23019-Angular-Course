import { Injectable } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PORSCHES} from "../shared/porsches";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PorscheService {

  constructor() { }

  public getPorsches():Observable<Porsche[]>{
    return of(PORSCHES);
  }

  public getFeaturedPorsches():Observable<Porsche[]>{
    return of(PORSCHES.filter(porsche => porsche.featured));
  }

  public getPorsche(id:string):Observable<Porsche>{
    return of(PORSCHES.filter(porsche=>porsche.id === id)[0]);
  }

  public getPorschesWithDelay():Observable<Porsche[]>{
    return of(PORSCHES)
      .pipe(
        delay(2000)
      );
    }

  public getPorschesIds():Observable<string[]>{
    return of(PORSCHES.map(porsche=>porsche.id))
  }
}
