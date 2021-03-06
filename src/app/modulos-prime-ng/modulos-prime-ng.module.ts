import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**PrimeNG */
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';


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
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class ModulosPrimeNgModule { }
