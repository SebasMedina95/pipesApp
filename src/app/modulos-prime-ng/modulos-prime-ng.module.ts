import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**PrimeNG */
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
    // ButtonModule,
    // CardModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    FieldsetModule
  ]
})
export class ModulosPrimeNgModule { }
