import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ChiTietPhan1Component } from './chi-tiet-phan1/chi-tiet-phan1.component';
import { ChiTietPhan2Component } from './chi-tiet-phan2/chi-tiet-phan2.component';
import { ChiTietPhan3Component } from './chi-tiet-phan3/chi-tiet-phan3.component';
import { ChiTietPhan4Component } from './chi-tiet-phan4/chi-tiet-phan4.component';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ChiTietPhan1Component,
    ChiTietPhan2Component,
    ChiTietPhan3Component,
    ChiTietPhan4Component,
    ChiTietComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }