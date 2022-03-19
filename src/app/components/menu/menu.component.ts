import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas= [
  {
   name: 'AboutMe',
   path: '/AboutMe'
   },
   { 
    name: 'MiHogar',
   path: '/MiHogar' 
   },
   { 
    name: 'Metas',
    path: '/Metas'
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
