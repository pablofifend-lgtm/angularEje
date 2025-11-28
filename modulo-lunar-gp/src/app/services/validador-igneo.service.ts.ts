import { Injectable } from "@angular/core";
import { Roca } from "../models/roca.model.ts/roca.model.ts";
import { IValidable } from "../models/validable.interface.ts/validable.interface.ts.js";


@Injectable({ providedIn: "root" })
export class ValidadorIgneo implements IValidable {
  isValid(roca: Roca): boolean {
    return roca.grupo === "igneas" && roca.tamGrano === "muy-grueso";
  }
}
