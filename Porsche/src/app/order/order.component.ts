import { Component, OnInit } from '@angular/core';
import {PorscheService} from "../services/porsche.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {HttpService} from "../services/http.service";
import {Porsche} from "../shared/porsche";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public displayedColumns: string[] = ['pizza','price','count','sum','delete'];
  public totalSum!:string

  constructor(
          public porscheService: PorscheService,
          private dialog: MatDialog,
          private dialogRed: MatDialogRef<OrderComponent>,
          private router: Router,
          private http: HttpService
  ) { }

  ngOnInit(): void {
    this.calculateTotalOrderSum();
  }

  public calculateTotalOrderSum(): void{
    this.totalSum = this.porscheService.orderedPorsches
      .map((porsche=>(Number(porsche.price))))
      .reduce((a, b)=>a+b, 0)
      .toFixed(2)
  }

  public addPorsche(chosenPorsche: Porsche):void{
    this.porscheService.orderedPorsches.push(chosenPorsche)
    this.calculateTotalOrderSum()
  }

  public removePorsche(chosenPorsche:Porsche):void{
    const numberOfPorsches: number = this.porscheService.orderedPorsches
      .filter(porsche=>porsche ==chosenPorsche).length
    this.porscheService.orderedPorsches = this.porscheService.orderedPorsches
      .filter(porsche=>porsche!==chosenPorsche)
    for (let i =0; i<numberOfPorsches -1; i++){
      this.porscheService.orderedPorsches.push(chosenPorsche)
    }
    this.calculateTotalOrderSum()
  }

  public removeFromOrder(deletedPorsche: Porsche):void{
    this.porscheService.orderedPorsches = this.porscheService.orderedPorsches
      .filter(porsche=>porsche!==deletedPorsche)
    this.calculateTotalOrderSum()
  }

  public displayedPorscheList(): Porsche[]{
    return [...new Map(this.porscheService.orderedPorsches.map(porsche => [porsche.id, porsche])).values()] // чтобы не было повторений в корзине, она убирает дубликат.     // values позволяет забрать валу
      .sort((a,b)=>( //сортировка
        a.name.localeCompare(b.name)
      ));
  }

  public countPorsches(chosenPorsche:Porsche):number{
    return this.porscheService.orderedPorsches
      .filter(porsche=>porsche==chosenPorsche).length
  }

  public calculatePorscheSum(chosenPorsche: Porsche):string{
    return(this.countPorsches(chosenPorsche)*Number(chosenPorsche.price))
      .toFixed(2)
  }


}
