import { IPilotable } from "../pilotable.interface.ts/pilotable.interface.ts";

export class Astronauta implements IPilotable {
  constructor(
    private identificador: string,
    private nombreCompleto: string,
    private edad: number
  ) {}

  dameId(): string { return this.identificador; }
  dameNombre(): string { return this.nombreCompleto; }
  dameEdad(): number { return this.edad; }
}
