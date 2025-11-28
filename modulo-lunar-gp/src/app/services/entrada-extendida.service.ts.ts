import { Injectable } from "@angular/core";
import { Roca } from "../models/roca.model.ts/roca.model.ts";
import { Entrada } from "../models/entrada.interface.ts/entrada.interface.ts.js";

@Injectable({ providedIn: "root" })
export class EntradaExtendida implements Entrada {
  private roca!: Roca;

  setRoca(r: Roca) { this.roca = r; }

  dameRoca(): Roca {
    return this.roca;
  }
}
