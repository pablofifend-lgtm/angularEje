import { IValidable } from '../interfaces/ivalidable';
import { Roca } from '../services/roca';

export class ValidadorSedimentario implements IValidable {
  isValid(roca: Roca): boolean {
    // Criterio Sedimentario:
    // - Rocas de grupo sedimentaria
    // - Textura: Fanerítica
    return roca['grupoOrigen'] === 'sedimentarias' && 
           roca['textura'] === 'faneritica';
  }

  getNombre(): string {
    return 'Validador Sedimentario';
  }
}