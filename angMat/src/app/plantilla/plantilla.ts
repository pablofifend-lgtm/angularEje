import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-plantilla',
  imports: [MatSlideToggleModule, MatFormField],
  templateUrl: './plantilla.html',
  styleUrl: './plantilla.css',
})
export class Plantilla {

}
