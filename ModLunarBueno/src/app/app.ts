import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reducido } from "./components/reducido/reducido";
import { Extendido } from './components/extendido/extendido';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Reducido, Extendido],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ModLunarBueno');
}
