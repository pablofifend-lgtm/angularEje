import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEntrada } from '../../interfaces/ientrada';
import { Roca } from '../../services/roca';

@Component({
  selector: 'app-entrada-extendida',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entrada-extendida.html',
  styleUrls: ['./entrada-extendida.css']
})
export class EntradaExtendidaComponent implements IEntrada {
  @Output() rocaCreada = new EventEmitter<Roca>();
  @Output() validacionRequerida = new EventEmitter<void>();

  roca: Roca = new Roca();
  mensajeError: string = '';

  // Opciones para los selects
  gruposOrigen: GrupoOrigen[] = ['igneas', 'metamorficas', 'sedimentarias'];
  tamanosGrano: { valor: TamanoGrano, texto: string }[] = [
    { valor: 'muy_grueso', texto: 'Grano muy grueso (> 30 mm)' },
    { valor: 'grueso', texto: 'Grano grueso (5 a 30 mm)' },
    { valor: 'medio', texto: 'Grano medio (2 a 5 mm)' },
    { valor: 'fino', texto: 'Grano fino (< 2 mm)' }
  ];
  clasificaciones: { valor: Clasificacion, texto: string }[] = [
    { valor: 'construccion', texto: 'Rocas de construcción' },
    { valor: 'ornamental', texto: 'Rocas ornamentales' },
    { valor: 'utensilios', texto: 'Utensilios para el hombre' },
    { valor: 'machacadas', texto: 'Piedras machacadas' }
  ];
  texturas: Textura[] = ['vitrea', 'afanitica', 'faneritica'];

  dameRoca(): Roca | null {
    if (this.validarFormulario()) {
      return new Roca(this.roca);
    }
    return null;
  }

  getTipo(): string {
    return 'Entrada Extendida';
  }

  validarFormulario(): boolean {
    if (!Roca.validarId(this.roca.id)) {
      this.mensajeError = 'El ID debe tener el formato LLDDDDLL (2 letras, 4 números, 2 letras)';
      return false;
    }

    if (!this.roca.nombre.trim()) {
      this.mensajeError = 'El nombre es obligatorio';
      return false;
    }

    if (this.roca.dureza < 1 || this.roca.dureza > 10) {
      this.mensajeError = 'La dureza debe estar entre 1 y 10';
      return false;
    }

    if (this.roca.tamanoCristales < 0 || this.roca.tamanoCristales > 10) {
      this.mensajeError = 'El tamaño de cristales debe estar entre 0 y 10';
      return false;
    }

    if (this.roca.temperaturaFormacion < -100 || this.roca.temperaturaFormacion > 100) {
      this.mensajeError = 'La temperatura debe estar entre -100 y 100 Kelvin';
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