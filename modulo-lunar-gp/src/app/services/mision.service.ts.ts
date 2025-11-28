import { Injectable } from "@angular/core";
import { IValidable } from "../models/validable.interface.ts/validable.interface.ts";
import { IPilotable } from "../models/pilotable.interface.ts/pilotable.interface.ts.js";
import { Entrada } from "../models/entrada.interface.ts/entrada.interface.ts.js";
import { Salida } from "../models/salida.interface.ts/salida.interface.ts.js";
import { Roca } from "../models/roca.model.ts/roca.model.ts.js";

export class Mision {

  constructor(
    private piloto: IPilotable,
    private validador: IValidable,
    private entrada: Entrada,
    private salida: Salida
  ) {}

  setValidador(v: IValidable) {
    this.validador = v;
  }

  analiza(): boolean {
    const roca: Roca = this.entrada.dameRoca();

    if (this.validador.isValid(roca)) {
      console.log("🙂 Roca válida para el estudio");
      this.salida.muestra(roca);
      return true;
    } else {
      console.log("🙁 Roca NO válida");
      return false;
    }
  }
}
