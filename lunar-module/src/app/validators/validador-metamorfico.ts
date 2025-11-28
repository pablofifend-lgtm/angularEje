import { IValidable } from "../interfaces/ivalidable";
import { Roca } from "../services/roca";

export class ValidadorMetamorfico implements IValidable {
  isValid(roca: Roca): boolean {
    // Criterio Metamórfico:
    // - Rocas de grupo metamórfica
    // - Grano medio o fino
    // - Textura Vítrea
    return roca["grupoOrigen"] === 'metamorficas' && 
           (roca["tamanoGrano"] === 'medio' || roca["tamanoGrano"] === 'fino') &&
           roca["textura"] === 'vitrea';
  }

  getNombre(): string {
    return 'Validador Metamórfico';
  }
}