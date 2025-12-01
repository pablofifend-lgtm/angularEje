import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCompo } from "./form-compo/form-compo";
import { FormCompo2 } from "./form-compo2/form-compo2";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormCompo2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practFormR');
}
