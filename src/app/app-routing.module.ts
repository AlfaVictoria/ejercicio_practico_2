import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MiHogarComponent } from './pages/mi-hogar/mi-hogar.component';
import { MetasComponent } from './pages/metas/metas.component';

const routes: Routes= 
[
  {
  path: 'AboutMe',
  component:AboutMeComponent
},
{
  path: 'MiHogar',
  component:MiHogarComponent
},
{
  path: 'Metas',
  component:MetasComponent
},
{
  path: '**',
  redirectTo: 'AboutMe'
}
];



@NgModule({
  declarations: [],
  exports: [
  RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
