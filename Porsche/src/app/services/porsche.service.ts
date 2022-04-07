import { Injectable } from '@angular/core';
import {Porsche} from "../shared/porsche";
import {delay, map, Observable, of, pipe} from "rxjs";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";
import {User} from "../shared/user";

@Injectable({
  providedIn: 'root'
})
export class PorscheService {

  public porschesLink: string="porsches";
  public feedbackLink: string="feedback";
  public orderedPorsches: Porsche[]=[];
  public usersLink: string = "users"
  public user: User = new User();
  public isUserSubmitted: boolean = false;
  public ordersLink:string="orders"

  constructor(private http: HttpClient,
              private dialog: MatDialog) { }

  public checkUsername():Observable<User>{
    return this.http.get<User>(baseURL+this.usersLink+"?username="+this.user.username)
      .pipe(map(user=>user))
  }

  public getPorsches():Observable<Porsche[]>{
    return this.http.get<Porsche[]>(baseURL + this.porschesLink)
  }

  public getFeaturedPorsches():Observable<Porsche[]>{
    return this.http.get<Porsche[]>(baseURL + this.porschesLink +"?featured=true")
  }

  public getPorsche(id:string):Observable<Porsche>{
    return this.http.get<Porsche>(baseURL + this.porschesLink +"/" + id)
    .pipe(
      delay(500)
    );
  }

  public getPorschesIds(): Observable<string[]>{
    return this.getPorsches().pipe(map(porsches => porsches.map(porsche => porsche.id)));
  }

  public openMessagePopup(message: string):void{
    this.dialog.open(PopupComponent,{
      width:'500px',
      height:'110px',
      data: message
    });
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
  public getUser():Observable<User>{
    return this.http.get<User>(baseURL+this.usersLink+"?username="+ this.user.username + "&password="+this.user.password)
      .pipe(map(user=>user))
  }
}
