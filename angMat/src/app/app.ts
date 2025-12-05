import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Plantilla } from "./plantilla/plantilla";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Plantilla],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angMat');
}
