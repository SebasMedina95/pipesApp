import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(valueHeroes: Heroe[] , ordenarPor : string = 'sin valor'): Heroe[] {
    console.log(valueHeroes);
    console.log(ordenarPor);

    if(ordenarPor == 'sin valor'){
      return valueHeroes;
    }else if(ordenarPor == 'nombre'){
      valueHeroes = valueHeroes.sort( (a,b) => (a.nombre > b.nombre) ? 1 : -1);
      return valueHeroes;
    }else if(ordenarPor == 'vuela'){
      valueHeroes = valueHeroes.sort( (a,b) => (a.vuela > b.vuela) ? 1 : -1);
      return valueHeroes;
    }else if(ordenarPor == 'color'){
      valueHeroes = valueHeroes.sort( (a,b) => (a.color > b.color) ? 1 : -1);
      return valueHeroes;
    }else{
      return valueHeroes;
    }

  }

}
