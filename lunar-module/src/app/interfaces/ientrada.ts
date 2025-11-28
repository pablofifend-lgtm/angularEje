import { Roca } from "../services/roca";

export interface IEntrada {
  dameRoca(): Roca | null;
  getTipo(): string;
}