import { Component, Input, OnInit } from '@angular/core';
import {Tea} from "../shared/tea";

@Component({
  selector: 'app-tea-info',
  templateUrl: './tea-info.component.html',
  styleUrls: ['./tea-info.component.scss']
})
export class TeaInfoComponent implements OnInit {

  @Input()
  public tea!: Tea;

  constructor() { }


  ngOnInit(): void {
  }



}
