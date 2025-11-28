import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mision } from './services/mision.service.ts';
import { Astronauta } from './models/astronauta.model.ts/astronauta.model.ts.js';
import { EntradaExtendida } from './services/entrada-extendida.service.ts.js';
import { SalidaEuropea } from './services/salida-europea.service.ts.js';
import { ValidadorIgneo } from './services/validador-igneo.service.ts.js';

// Importar tus clases

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html'
})
export class AppComponent {

  mensaje = '';
  mision!: Mision;

  constructor() {
    const piloto = new Astronauta('AG01', 'Agmunsen Pérez', 45);
    const entrada = new EntradaExtendida();
    const salida = new SalidaEuropea();
    const validador = new ValidadorIgneo();

    // Crear misión
    this.mision = new Mision(piloto, validador, entrada, salida);
  }

  ejecutarMision() {
    const esValida = this.mision.analiza();

    this.mensaje = esValida
      ? '😊 La roca es válida'
      : '😠 La roca NO es válida';
  }
  
}
