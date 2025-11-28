import { Roca } from "../services/roca";

export interface ISalida {
  muestra(roca: Roca, esValida: boolean): void;
  getTipo(): string;
}