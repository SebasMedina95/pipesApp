import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**i18nSelect Pipe */
  nombre : string = 'Yulieth Marcela';
  genero : string = 'F'; //Invitarla

  invitacionMapping1 = {
    'M' : 'Saludarlo',
    'F' : 'Saludarla'
  }

  invitacionMapping2 = {
    'M' : 'Invitarlo',
    'F' : 'Invitarla'
  }

  cambiarCliente(){
    this.nombre = 'Sebastian Medina';
    this.genero = 'M';
  }

  /**i18nPlural Pipe */
  clientes : string [] = ['Marcela', 'Monica', 'Sebastian', 'Luisa', 'Dorilberto', 'Milanesa'];
  clientesMapping = {
    '=0'    : 'No tenemos ningún cliente esperando ...',
    '=1'    : 'tenemos un cliente esperando ...',
    'other' : 'tenemos # clientes esperando ...' //Con el # reconoce el número por el other.
  }

  eliminarCliente(){
    this.clientes.pop();
  }

  /**KeyValue Pipe */
  persona = {
    nombre : 'Yuli',
    cedula : '132104',
    residencia : 'Canada'
  }

  /**Json Pipe */
  heroes = [
    {
      nombre : 'Capitan America',
      poder  : 'Escudo'
    },
    {
      nombre : 'Ironman',
      poder  : 'Nanotraje'
    },
    {
      nombre : 'Thor',
      poder  : 'Martillo / Hacha'
    },
    {
      nombre : 'Dr. Strange',
      poder  : 'Magia'
    }
  ]

  /**Async Pipe */
  /**Observable o con Promesas */
  myObservable = interval(1000); //Emite el 0, 1, 2 ,3  ....

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('PROMESA RESUELTA ! - Tenemos DATOS ... !!');
    }, 3500);
  });

}
