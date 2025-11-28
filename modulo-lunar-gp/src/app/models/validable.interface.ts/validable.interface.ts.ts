import { Roca } from "../roca.model.ts/roca.model.ts";

export interface IValidable {
  isValid(roca: Roca): boolean;
}
