import {HomeComponent} from "../home/home.component";
import {ContactComponent} from "../contact/contact.component";
import {TeaListComponent} from "../tea-list/tea-list.component";
import {Routes} from "@angular/router";


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: TeaListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
]
