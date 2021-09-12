import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pract-inicios',
  templateUrl: './pract-inicios.component.html'
})
export class PractIniciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre1 : string = 'yulieth';
  nombre2 : string = 'yulieth marcela urrego restrepo';
  sueldo : number = 5600000

  mostrarNombre(){
    console.log(this.nombre1);
    console.log('Sueldo:', this.sueldo);
  }

}
