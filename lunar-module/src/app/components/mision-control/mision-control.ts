import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaExtendidaComponent } from '../entrada-extendida/entrada-extendida';
import { EntradaReducidaComponent } from '../entrada-reducida/entrada-reducida';
import { SalidaAmericanaComponent } from '../salida-americana/salida-americana';
import { SalidaEuropeaComponent } from '../salida-europea/salida-europea';
import { ValidadorIgneo } from '../../validators/validador-igneo';
import { ValidadorMetamorfico } from '../../validators/validador-metamorfico';
import { ValidadorSedimentario } from '../../validators/validador-sedimentario';
import { IValidable } from '../../interfaces/ivalidable';
import { Roca } from '../../services/roca';


@Component({
  selector: 'app-mision-control',
  standalone: true,
  imports: [
    CommonModule,
    EntradaExtendidaComponent,
    EntradaReducidaComponent,
    SalidaAmericanaComponent,
    SalidaEuropeaComponent
  ],
  templateUrl: './mision-control.html',
  styleUrls: ['./mision-control.css']
})
export class MisionControlComponent implements OnInit {
  @ViewChild(SalidaAmericanaComponent) salidaAmericana!: SalidaAmericanaComponent;
  @ViewChild(SalidaEuropeaComponent) salidaEuropea!: SalidaEuropeaComponent;

  // Astronauta
  astronauta: Astronauta;
  
  // Validadores disponibles
  validadorActual: IValidable;
  validadores: { nombre: string, validador: IValidable }[];
  
  // Tipo de entrada y salida
  tipoEntrada: 'extendida' | 'reducida' = 'extendida';
  tipoSalida: 'americana' | 'europea' = 'europea';
  
  // Roca actual
  rocaActual: Roca | null = null;
  
  // Misión actual
  misionActual: Mision | null = null;

  // Historial de análisis
  historial: { roca: Roca, valida: boolean, validador: string, timestamp: Date }[] = [];

  constructor() {
    // Crear astronauta Agmunsen
    this.astronauta = new Astronauta('AGM01', 'Agmunsen Pérez', 45);
    
    // Inicializar validadores
    this.validadores = [
      { nombre: 'Criterio Ígneo', validador: new ValidadorIgneo() },
      { nombre: 'Criterio Metamórfico', validador: new ValidadorMetamorfico() },
      { nombre: 'Criterio Sedimentario', validador: new ValidadorSedimentario() }
    ];
    
    this.validadorActual = this.validadores[0].validador;
  }

  ngOnInit(): void {
    console.log('🚀 Misión Lunar iniciada');
    console.log(`👨‍🚀 Astronauta: ${this.astronauta.dameNombre()}`);
  }

  onRocaCreada(roca: Roca): void {
    this.rocaActual = roca;
    console.log('🪨 Nueva roca creada:', roca);
  }

  analizarRoca(): void {
    if (!this.rocaActual) {
      alert('⚠️ No hay roca para analizar');
      return;
    }

    const esValida = this.validadorActual.isValid(this.rocaActual);
    
    // Agregar al historial
    this.historial.unshift({
      roca: this.rocaActual,
      valida: esValida,
      validador: this.validadorActual.getNombre(),
      timestamp: new Date()
    });

    // Mostrar resultado en el formato seleccionado
    if (this.tipoSalida === 'americana') {
      this.salidaAmericana.muestra(this.rocaActual, esValida);
    } else {
      this.salidaEuropea.muestra(this.rocaActual, esValida);
    }

    console.log(`✅ Análisis completado: ${esValida ? 'VÁLIDA' : 'NO VÁLIDA'}`);
  }

  cambiarValidador(index: number): void {
    this.validadorActual = this.validadores[index].validador;
    console.log(`🔄 Validador cambiado a: ${this.validadores[index].nombre}`);
  }

  cambiarTipoEntrada(tipo: 'extendida' | 'reducida'): void {
    this.tipoEntrada = tipo;
    this.rocaActual = null;
  }

  cambiarTipoSalida(tipo: 'americana' | 'europea'): void {
    this.tipoSalida = tipo;
  }

  limpiarHistorial(): void {
    this.historial = [];
  }

  // Método para pruebas rápidas
  probarRocaIgnea(): void {
    const rocaIgnea = new Roca({
      id: 'AB1234CD',
      nombre: 'Granito Lunar',
      grupoOrigen: 'igneas',
      dureza: 7,
      tamanoGrano: 'muy_grueso',
      clasificacion: 'construccion',
      tamanoCristales: 5,
      temperaturaFormacion: 50,
      estructura: 'Cristalina masiva',
      formaGranos: 'Angular',
      textura: 'faneritica'
    });
    
    this.rocaActual = rocaIgnea;
    this.analizarRoca();
  }

  probarRocaMetamorfica(): void {
    const rocaMetamorfica = new Roca({
      id: 'XY5678ZW',
      nombre: 'Esquisto Lunar',
      grupoOrigen: 'metamorficas',
      dureza: 5,
      tamanoGrano: 'medio',
      clasificacion: 'ornamental',
      tamanoCristales: 3,
      temperaturaFormacion: -20,
      estructura: 'Foliada',
      formaGranos: 'Aplanado',
      textura: 'vitrea'
    });
    
    this.rocaActual = rocaMetamorfica;
    this.analizarRoca();
  }

  probarRocaSedimentaria(): void {
    const rocaSedimentaria = new Roca({
      id: 'LM9012NP',
      nombre: 'Arenisca Lunar',
      grupoOrigen: 'sedimentarias',
      dureza: 4,
      tamanoGrano: 'fino',
      clasificacion: 'construccion',
      tamanoCristales: 2,
      temperaturaFormacion: 25,
      estructura: 'Estratificada',
      formaGranos: 'Redondeado',
      textura: 'faneritica'
    });
    
    this.rocaActual = rocaSedimentaria;
    this.analizarRoca();
  }
}