import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'; //Para las animaciones (Efecto burbuja al seleccionar un p-fieldset)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipesApp';

  // nombre1 : string = 'yulieth';
  // nombre2 : string = 'yulieth marcela urrego restrepo';
  // sueldo : number = 5600000

  // mostrarNombre(){
  //   console.log(this.nombre1);
  //   console.log('Sueldo:', this.sueldo);
  // }

  /**Para animaciones (https://primefaces.org/primeng/showcase/#/fieldset) - (Efecto burbuja al seleccionar un p-fieldset)*/
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true; //(Efecto burbuja al seleccionar un p-fieldset)
  }

}
