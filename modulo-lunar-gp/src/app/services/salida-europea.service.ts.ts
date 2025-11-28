import { Injectable } from "@angular/core";
import { Roca } from "../models/roca.model.ts/roca.model.ts";
import { Salida } from "../models/salida.interface.ts/salida.interface.ts.js";

@Injectable({ providedIn: "root" })
export class SalidaEuropea implements Salida {

  muestra(roca: Roca): void {
    console.log("=== FORMATO EUROPEO ===");
    console.log("Nombre:", roca.nombre);
    console.log("Grupo:", roca.grupo);
    console.log("Temperatura (°C):", roca.tempFormacion);
  }
}
