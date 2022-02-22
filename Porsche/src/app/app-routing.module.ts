import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {routes} from "./shared/routes";

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
