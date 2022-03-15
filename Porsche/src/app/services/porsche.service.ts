import { Injectable } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PORSCHES} from "../shared/porsches";
import {delay, Observable, of} from "rxjs";
import {FormGroup} from "@angular/forms";

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

  public onFormValueChanged(formGroup: FormGroup, formErrors: any, validationMessages:any, data?:any ){
    if (!formGroup){
      return;
    }
    for (const field in formErrors){
      if (formErrors.hasOwnProperty(field)){
        formErrors[field] = '';
        const control = formGroup.get(field);
        if (control && control.dirty && !control.valid){
          const messages = validationMessages[field]
          for (const key in control.errors){
            if (control.errors.hasOwnProperty(key)){
              formErrors[field]+=messages[key]+''
            }
          }
        }
      }
    }
  }
}
