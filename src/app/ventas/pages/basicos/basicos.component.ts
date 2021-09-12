import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  subtitulo1     : string = 'Esto es un subtítulo 1 ... Desde TS.';
  subtitulo2     : string = 'Esto es un subtítulo 2 ... Desde TS.';
  subtitulo3     : string = 'Esto es un subtítulo 3 ... Desde TS.';
  nombreLowe     : string = 'sebastian medina';
  nombreUpper    : string = 'YULIETH MARCELA';
  nombreCompleto : string = 'eStOy ApRenDIENdo anGULAR'; 

  fecha : Date = new Date(); //Día actual.

}
