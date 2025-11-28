import { Component, EventEmitter, Output } from "@angular/core";
import { Roca } from "../../models/roca.model.ts/roca.model.ts";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "formulario-reducido",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./reducida.component.ts.html",
})
export class FormularioReducidoComponent {
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
