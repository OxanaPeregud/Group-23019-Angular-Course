import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PorscheService} from "../services/porsche.service";
import {OrderComponent} from "../order/order.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject('BaseURL')public BaeURL:string,
              public porscheService: PorscheService,
              private dialog: MatDialog) { }

  public openOrderForm():void{
    this.dialog.open(OrderComponent,{
      width:'700px',
      height:'auto'
    })
  }

  ngOnInit(): void {
  }

}
