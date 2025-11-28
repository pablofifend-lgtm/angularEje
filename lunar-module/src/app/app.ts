import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisionControlComponent } from './components/mision-control/mision-control';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MisionControlComponent],
  template: `
    <app-mision-control></app-mision-control>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'Módulo Lunar - Agmunsen';
}