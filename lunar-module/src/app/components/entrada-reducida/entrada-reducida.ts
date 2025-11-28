import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEntrada } from '../../interfaces/ientrada';
import { Roca } from '../../services/roca';

type TamanoGrano = 'muy_grueso' | 'grueso' | 'medio' | 'fino';
type Clasificacion = 'construccion' | 'ornamental' | 'utensilios' | 'machacadas';
type Textura = 'vitrea' | 'afanitica' | 'faneritica';

@Component({
  selector: 'app-entrada-reducida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entrada-reducida.html',
  styleUrls: ['./entrada-reducida.css']
})
export class EntradaReducidaComponent implements IEntrada {
  @Output() rocaCreada = new EventEmitter<Roca>();
  @Output() validacionRequerida = new EventEmitter<void>();

  roca: Roca = new Roca();
  mensajeError: string = '';

  gruposOrigen: string[] = ['igneas', 'metamorficas', 'sedimentarias'];
  tamanosGrano: TamanoGrano[] = ['muy_grueso', 'grueso', 'medio', 'fino'];
  clasificaciones: Clasificacion[] = ['construccion', 'ornamental', 'utensilios', 'machacadas'];
  texturas: Textura[] = ['vitrea', 'afanitica', 'faneritica'];

  dameRoca(): Roca | null {
    if (this.validarFormulario()) {
      const nuevaRoca = new Roca();
      Object.assign(nuevaRoca, this.roca);
      return nuevaRoca;
    }
    return null;
  }

  getTipo(): string {
    return 'Entrada Reducida';
  }

  validarFormulario(): boolean {
    if (!Roca.validarId(this.roca['id'])) {
      this.mensajeError = 'ID inválido (formato: LLDDDDLL)';
      return false;
    }

    if (!this.roca['nombre'].trim()) {
      this.mensajeError = 'Nombre obligatorio';
      return false;
    }

    if (Number(this.roca['dureza']) < 1 || Number(this.roca['dureza']) > 10) {
      this.mensajeError = 'Dureza: 1-10';
      return false;
    }

    if (this.roca['tamanoCristales'] < 0 || this.roca['tamanoCristales'] > 10) {
      this.mensajeError = 'Cristales: 0-10';
      return false;
    }

    if (this.roca['temperaturaFormacion'] < -100 || this.roca['temperaturaFormacion'] > 100) {
      this.mensajeError = 'Temperatura: -100 a 100 K';
      return false;
    }

    this.mensajeError = '';
    return true;
  }

  onSubmit(): void {
    const rocaValida = this.dameRoca();
    if (rocaValida) {
      this.rocaCreada.emit(rocaValida);
      this.validacionRequerida.emit();
    }
  }

  limpiarFormulario(): void {
    this.roca = new Roca();
    this.mensajeError = '';
  }
}