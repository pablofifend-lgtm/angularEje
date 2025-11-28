import { Roca } from "../roca.model.ts/roca.model.ts";

export interface Salida {
  muestra(roca: Roca): void;
}
