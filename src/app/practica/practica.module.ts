import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractIniciosComponent } from './pract-inicios/pract-inicios.component';
import { ModulosPrimeNgModule } from '../modulos-prime-ng/modulos-prime-ng.module';



@NgModule({
  declarations: [
    PractIniciosComponent
  ],
  imports: [
    CommonModule,
    ModulosPrimeNgModule
  ],
  exports: [
    PractIniciosComponent
  ]
})
export class PracticaModule { }
