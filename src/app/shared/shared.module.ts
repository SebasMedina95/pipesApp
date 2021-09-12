import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ModulosPrimeNgModule } from '../modulos-prime-ng/modulos-prime-ng.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ModulosPrimeNgModule //Necesitamos el modulo personalizado para poder que reconozca
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
