import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PorscheService} from "../services/porsche.service";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public porscheService: PorscheService,
              private dialogRef: MatDialogRef<LoginComponent>,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public openSignUpForm():void{
    this.dialogRef.close()
    this.dialog.open(SignUpComponent,{
      width:"700px",
      height:"500px"
    })
  }

  public onSubmit():void{
    this.porscheService.getUser().subscribe(user=>{
      const data: any = user;
      if (data.length != 0){
        this.porscheService.user = data[0];
        this.porscheService.isUserSubmitted = true;
        this.dialogRef.close()
      }else {
        this.porscheService.openMessagePopup("Неверная комбинация логин/пароль")
      }

    })
}

}
