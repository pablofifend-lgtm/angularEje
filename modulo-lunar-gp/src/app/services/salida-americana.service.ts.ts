import { Injectable } from "@angular/core";
import { Roca } from "../models/roca.model.ts/roca.model.ts";
import { Salida } from "../models/salida.interface.ts/salida.interface.ts.js";

@Injectable({ providedIn: "root" })
export class SalidaAmericana implements Salida {

  muestra(roca: Roca): void {
    const tempF = (roca.tempFormacion * 9) / 5 + 32;

    console.log("=== AMERICAN FORMAT ===");
    console.log("Name:", roca.nombre);
    console.log("Group:", roca.grupo);
    console.log("Temperature (°F):", tempF);
  }
}
