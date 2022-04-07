import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";
import {MenuComponent} from "../menu/menu.component";
import {ContactComponent} from "../contact/contact.component";
import {PorscheDetailComponent} from "../porsche-detail/porsche-detail.component";
import {PlaceOrderComponent} from "../place-order/place-order.component";

export const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'menu',
    component: MenuComponent
  },
  {
    path:'porsche-detail/:id',
    component: PorscheDetailComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'order',
    component: PlaceOrderComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

