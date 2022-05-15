import { Component, OnInit } from '@angular/core';
//import { link } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor() { }

  tarjetas:any[] = [

    {
      titulo:"Recoje",
      alt:"recoje",
      imagen:"../assets/img/recoje.svg",
      link:"['problematica']"
    },
    {
      titulo:"Canjea",
      alt:"canjea",
      imagen:"../assets/img/canjea.svg",
      link:"['general']"

    },
    {
      titulo:"Disfruta",
      alt:"disfruta",
      imagen:"../assets/img/disfruta.svg",
      link:"['patrocinadores']"
    }

  ];



  

}
