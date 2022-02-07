import { Component, OnInit } from '@angular/core';
import {Tea} from "../shared/tea";

let Teas: Tea[]=[{
  id: '0',
  name: 'Дарджилинг',
  image: '/assets/images/Dargiling.jpg',
  featured: true,
  label: '',
  price: '8.99',
  description: 'Черный чай'
},
  {
  id: '1',
  name: 'Улун',
  image: '/assets/images/Oolong.jpg',
  featured: true,
  label: '',
  price: '6.99',
  description: 'Зеленый чай'
},
  {
    id: '2',
    name: 'Пуэр',
    image: '/assets/images/Puer.jpg',
    featured: true,
    label: '',
    price: '7.99',
    description: 'Зеленый чай'
  }
];

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.scss']
})
export class TeaListComponent implements OnInit {

  public teas = Teas;

  constructor() { }

  ngOnInit(): void {
  }

}
