import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { MiHogarComponent } from './mi-hogar/mi-hogar.component';
import { MetasComponent } from './metas/metas.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    MiHogarComponent,
    MetasComponent
  ],
  exports: [
    AboutMeComponent,
    MiHogarComponent,
    MetasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
