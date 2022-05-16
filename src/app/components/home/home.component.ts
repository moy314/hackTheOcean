import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { link } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit{

  @ViewChild("problematica")
  public problematica!: ElementRef;

  public moveToStructure():void {
}

  constructor(private router: Router ) { 

    this.moveToStructure();

  }
  ngAfterViewInit(): void {
    console.log(this.problematica);

  }

  
  tarjetas:any[] = [

    {
      titulo:"Recoje",
      alt:"recoje",
      imagen:"../assets/img/recoje.svg",
      link:"/home"
    },
    {
      titulo:"Canjea",
      alt:"canjea",
      imagen:"../assets/img/canjea.svg",
      link:"/general"

    },
    {
      titulo:"Disfruta",
      alt:"disfruta",
      imagen:"../assets/img/disfruta.svg",
      link:"/patrocinadores"
    }

  ];

  public rediredt(tarjeta: any) {
    console.log(tarjeta.link)
    this.router.navigate([tarjeta.link]);
  }

  public gotoProblematica() {
  this.problematica.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

}
