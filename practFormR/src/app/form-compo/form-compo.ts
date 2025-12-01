import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-compo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-compo.html',
  styleUrl: './form-compo.css',
})
export class FormCompo {
  //crear un form control
  userNameControl = new FormControl('');
  //constructor(private fc: FormBuilder){}

}
