import { Pipe, PipeTransform } from "@angular/core";

/**Necesitamos este decorador para crear un Pipe. */
@Pipe({
    name : 'vuela'
})
export class VuelaPipe implements PipeTransform {
    transform(valor: boolean ) : string{
        console.log(valor);
        return (valor) ?  'puede volar.' : 'no puede volar.';
    }
}