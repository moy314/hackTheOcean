import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.css']
})
export class PatrocinadoresComponent  {

  constructor() { }

  patrocinadores:any[] = [
    {
      nombre:"microsoft",
      imagen:"../../../assets/img/microsoft-.svg",
      alt:"microsoft",
      descripcion:"obten beneficios es diversos productos microsoft: azure,surface,office y mucho más!"
    },

    {
      nombre:"aeromexico",
      imagen:"../../../assets/img/aeromexico.svg",
      alt:"aeromexico",
      descripcion:"puedes canjear tus puntos por millas de viaje y por cada 10,000 puntos puedes participar por vuelos gratis"
    },

    {
      nombre:"walmart",
      imagen:"../../../assets/img/walmart.svg",
      alt:"walmart",
      descripcion:"puedes usar tus puntos com puntos payback y canjearlos por productos en toda la cadena walmart"
    },

    // {
    //   nombre:"ADO",
    //   imagen:"../../../assets/img/m.svg",
    //   alt:"ADO",
    //   descripcion:"usa tus puntos para viajar a todos los destinos que quieras!"
    // },

    {
      nombre:"coca-cola",
      imagen:"../../../assets/img/coca-cola.svg",
      alt:"coca-cola",
      descripcion:"usa tus puntos para canjaerlo por productos de la famimlia coca-cola"
    },


    {
      nombre:"corona",
      imagen:"../../../assets/img/corona.png",
      alt:"corona",
      descripcion:"disfruta de nuestros productos en tu viaje y diviertete con famimlia y amigos "
    },

    {
      nombre:"palacio de hierro",
      imagen:"../../../assets/img/palaciodehierro.svg",
      alt:"palacio de hierro",
      descripcion:"viste a la moda con increíbles descuentos con tus puntos canjeables"
    },

    {
      nombre:"pfizer",
      imagen:"../../../assets/img/Pfizer.svg",
      alt:"pfizer",
      descripcion:"sigue cuidando tu salud y la de nuestras playas adquiriendo nuestros productos"
    },
    {
      nombre:"el portón",
      imagen:"../../../assets/img/porton.svg",
      alt:"el portón",
      descripcion:"ven y disfruta de de cualquier platillo de nuestro menú usando tus puntos recolectados"
    }

  ]
  
}
