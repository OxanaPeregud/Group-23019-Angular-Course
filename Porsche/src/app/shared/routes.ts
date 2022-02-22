import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";
import {MenuComponent} from "../menu/menu.component";
import {ContactComponent} from "../contact/contact.component";

export const routes: Routes = [
  // {
  //   path:'718',
  //   component: HomeComponent
  // },
  // {
  //   path:'911',
  //   component: HomeComponent
  // },
  // {
  //   path:'taycan',
  //   component: HomeComponent
  // },
  // {
  //   path:'panamera',
  //   component: HomeComponent
  // },
  // {
  //   path:'macan',
  //   component: HomeComponent
  // },
  // {
  //   path:'cayenne',
  //   component: HomeComponent
  // },
  //Для них создать компоненты

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
    path:'contact',
    component: ContactComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

