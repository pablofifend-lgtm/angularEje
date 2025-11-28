import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISalida } from '../../interfaces/isalida';
import { Roca } from '../../services/roca';

@Component({
  selector: 'app-salida-americana',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salida-americana.html',
  styleUrls: ['./salida-americana.css']
})
export class SalidaAmericanaComponent implements ISalida {
  @Input() roca: Roca | null = null;
  @Input() esValida: boolean = false;
  mostrarResultado: boolean = false;

  muestra(roca: Roca, esValida: boolean): void {
    this.roca = roca;
    this.esValida = esValida;
    this.mostrarResultado = true;
  }

  getTipo(): string {
    return 'American Format';
  }

  getTemperaturaFahrenheit(): number {
    return this.roca ? this.roca.getTemperaturaFahrenheit() : 0;
  }

  traducirGrupo(grupo: string): string {
    const traducciones: { [key: string]: string } = {
      'igneas': 'Igneous',
      'metamorficas': 'Metamorphic',
      'sedimentarias': 'Sedimentary'
    };
    return traducciones[grupo] || grupo;
  }

  traducirTamanoGrano(tamano: string): string {
    const traducciones: { [key: string]: string } = {
      'muy_grueso': 'Very Coarse Grain (> 30 mm)',
      'grueso': 'Coarse Grain (5 to 30 mm)',
      'medio': 'Medium Grain (2 to 5 mm)',
      'fino': 'Fine Grain (< 2 mm)'
    };
    return traducciones[tamano] || tamano;
  }

  traducirClasificacion(clasificacion: string): string {
    const traducciones: { [key: string]: string } = {
      'construccion': 'Construction Rocks',
      'ornamental': 'Ornamental Rocks',
      'utensilios': 'Tool Rocks',
      'machacadas': 'Crushed Stones'
    };
    return traducciones[clasificacion] || clasificacion;
  }

  traducirTextura(textura: string): string {
    const traducciones: { [key: string]: string } = {
      'vitrea': 'Glassy',
      'afanitica': 'Aphanitic',
      'faneritica': 'Phaneritic'
    };
    return traducciones[textura] || textura;
  }

  cerrarResultado(): void {
    this.mostrarResultado = false;
  }
}