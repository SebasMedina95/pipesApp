import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enMayuscula : boolean = true;
  ordenarPor  : string = '';

  heroes : Heroe[] = [
    {
      nombre : 'Flash',
      vuela  : false,
      color  : Color.rojo
    },
    {
      nombre : 'Superman',
      vuela  : true,
      color  : Color.azul
    },
    {
      nombre : 'Batman',
      vuela  : false,
      color  : Color.negro
    },
    {
      nombre : 'Mujer Maravilla',
      vuela  : false,
      color  : Color.rojo
    },
    {
      nombre : 'Linterna Verde',
      vuela  : true,
      color  : Color.verde
    },
    {
      nombre : 'Acuaman',
      vuela  : true,
      color  : Color.gris
    }
  ]

  cambiar(){
    if(this.enMayuscula){
      this.enMayuscula = false;
    }else{
      this.enMayuscula = true;
    }
  }

  cambiarOrden(valor : string){
    this.ordenarPor = valor;
    console.log(valor);
  }



}
