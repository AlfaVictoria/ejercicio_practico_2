import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { AboutMeComponent } from './pages/about-me/about-me.component';
//import { MiHogarComponent } from './pages/mi-hogar/mi-hogar.component';
//import { MetasComponent } from './pages/metas/metas.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
   //AboutMeComponent,
    //MiHogarComponent,
   // MetasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
   PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
