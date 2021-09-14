import { Pipe, PipeTransform } from "@angular/core";

/**Necesitamos este decorador para crear un Pipe. */
@Pipe({
    name : 'mayusculita'
})
export class MayusculasPipe implements PipeTransform {
    transform(valor: string , enMayuscula : boolean) : string{
        console.log(valor);
        return (enMayuscula === true) ?  valor.toUpperCase() : valor.toLowerCase();
    }
}