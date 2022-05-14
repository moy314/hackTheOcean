import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recolectaBasura';

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
