import { Injectable } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {PORSCHES} from "../shared/porsches";
import {delay, map, Observable, of} from "rxjs";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class PorscheService {

  public porschesLink: string="porsches";
  public feedbackLink: string="feedback";

  constructor(private http: HttpClient) { }

  public getPorsches():Observable<Porsche[]>{
    return this.http.get<Porsche[]>(baseURL + this.porschesLink)
  }

  public getFeaturedPorsches():Observable<Porsche[]>{
    return this.http.get<Porsche[]>(baseURL + this.porschesLink +"?featured=true")
  }

  public getPorsche(id:string):Observable<Porsche>{
    return this.http.get<Porsche>(baseURL + this.porschesLink +"/" + id);
  }

  public getPorschesIds(): Observable<string[]>{
    return this.getPorsches().pipe(map(porsches => porsches.map(porsche => porsche.id)));
  }

  public getPorschesWithDelay():Observable<Porsche[]>{
    return this.http.get<Porsche[]>(baseURL + this.porschesLink)
      .pipe(
        delay(2000)
      );
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
