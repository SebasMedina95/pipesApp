import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**Si vamos a importar componentes que tengan algún tipo de animación ... 
 * Por ejemplo, para usar Fieldset
*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

/**PrimeNG */
// import {ButtonModule} from 'primeng/button';
// import {CardModule} from 'primeng/card';
//import { ModulosPrimeNgModule } from './modulos-prime-ng/modulos-prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { PracticaModule } from './practica/practica.module';
import { AppRouterModule } from './app-router.module';

//Cambiar el Local de la APP.
import localParaEspanolColombia from '@angular/common/locales/es-CO'; //Español Colombiano
import localParaFrancesFrancia from '@angular/common/locales/fr'; //Español Colombiano
import { registerLocaleData } from '@angular/common'; //Importamos registro de la fecha local
registerLocaleData(localParaEspanolColombia); //Registramos la fecha local pero con base al formato que queremos e idioma.
registerLocaleData(localParaFrancesFrancia);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule, //No olvidar llamar las rutas para poder navegar.
    BrowserAnimationsModule,
    PracticaModule,
    SharedModule,
    VentasModule
    // ButtonModule,
    // CardModule
  ],
  exports : [
    AppRouterModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue: 'es-CO'} //Tener esto ajustado hará que toda la aplicación trabaje con este idioma, incluso los formatos de monera se adaptarán.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
