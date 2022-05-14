import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor() { }

  tarjetas:any[] = [

    {
      titulo:"comunidad",
      alt:"comunidad",
      imagen:"../assets/img/social.svg"
      
    },
    {
      titulo:"impacto",
      alt:"impacto",
      imagen:"../assets/img/impacto.svg"
    },
    {
      titulo:"beneficios",
      alt:"beneficios",
      imagen:"../assets/img/beneficio.svg"
    }

  ];



  

}
