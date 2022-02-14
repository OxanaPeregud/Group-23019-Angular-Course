import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TeaListComponent } from './tea-list/tea-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { TeaInfoComponent } from './tea-info/tea-info.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";

import '@angular/common/locales/global/ru';
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TeaListComponent,
        TeaInfoComponent,
        FooterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
