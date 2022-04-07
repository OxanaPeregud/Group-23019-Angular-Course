import { Component, OnInit } from '@angular/core';
import {PorscheService} from "../services/porsche.service";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public porscheService: PorscheService,
              private dialogRef: MatDialogRef<SignUpComponent>,
              private http: HttpService) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.porscheService.checkUsername().subscribe(user=>{
      const data: any = user;
      if (data.length != 0){
        this.porscheService.openMessagePopup("Логин занят!")
      }else if(this.porscheService.user.remember){
        this.http.save(this.porscheService.user, this.porscheService.usersLink)
      }
      this.dialogRef.close()
      this.porscheService.isUserSubmitted = true
    })
  }


}
