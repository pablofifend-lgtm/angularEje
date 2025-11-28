import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISalida } from '../../interfaces/isalida';
import { Roca } from '../../services/roca';

@Component({
  selector: 'app-salida-europea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salida-europea.html',
  styleUrls: ['./salida-europea.css']
})
export class SalidaEuropeaComponent implements ISalida {
  @Input() roca: Roca | null = null;
  @Input() esValida: boolean = false;
  mostrarResultado: boolean = false;

  muestra(roca: Roca, esValida: boolean): void {
    this.roca = roca;
    this.esValida = esValida;
    this.mostrarResultado = true;
  }

  getTipo(): string {
    return 'Formato Europeo';
  }

  getTemperaturaCelsius(): number {
    return this.roca ? this.roca.getTemperaturaCelsius() : 0;
  }

  traducirTamanoGrano(tamano: string): string {
    const traducciones: { [key: string]: string } = {
      'muy_grueso': 'Grano muy grueso (> 30 mm)',
      'grueso': 'Grano grueso (5 a 30 mm)',
      'medio': 'Grano medio (2 a 5 mm)',
      'fino': 'Grano fino (< 2 mm)'
    };
    return traducciones[tamano] || tamano;
  }

  traducirClasificacion(clasificacion: string): string {
    const traducciones: { [key: string]: string } = {
      'construccion': 'Rocas de construcción',
      'ornamental': 'Rocas ornamentales',
      'utensilios': 'Rocas de uso en utensilios',
      'machacadas': 'Piedras machacadas'
    };
    return traducciones[clasificacion] || clasificacion;
  }

  cerrarResultado(): void {
    this.mostrarResultado = false;
  }
}