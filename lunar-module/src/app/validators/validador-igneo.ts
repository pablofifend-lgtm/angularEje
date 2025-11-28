import { IValidable } from "../interfaces/ivalidable";
import { Roca } from "../services/roca";


export class ValidadorIgneo implements IValidable {
  isValid(roca: Roca): boolean {
    // Criterio Ígneo:
    // - Roca de grupo ígneas
    // - Grano muy grueso
    return roca["grupoOrigen"] === 'igneas' && 
           roca["tamanoGrano"] === 'muy_grueso';
  }

  getNombre(): string {
    return 'Validador Ígneo';
  }
}