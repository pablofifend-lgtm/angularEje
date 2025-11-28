import { Component, EventEmitter, Output } from "@angular/core";
import { Roca } from "../../models/roca.model.ts/roca.model.ts";
import { FormsModule } from '@angular/forms';
import { Entrada } from "../../models/entrada.interface.ts/entrada.interface.ts.js";

@Component({
  selector: "formulario-extendido",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./extendida.component.ts.html",
})
export class FormularioExtendidoComponent implements Entrada{
  dameRoca(): Roca {
    return this.roca;
  }
  setRoca(r: Roca){
    this.roca = r;
  }
  @Output() enviarRoca = new EventEmitter<Roca>();

  roca: Roca = {
    id: "",
    nombre: "",
    grupo: "igneas",
    dureza: 1,
    tamGrano: "fino",
    clasificacion: "",
    tamCristales: 0,
    tempFormacion: 0,
    estructura: "",
    formaGranos: "",
    textura: "vitrea",
  };

  enviar() {
    this.enviarRoca.emit(this.roca);
  }
}
