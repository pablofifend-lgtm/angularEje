import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { email, required, validateAsync } from '@angular/forms/signals';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-form-compo2',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './form-compo2.html',
  styleUrl: './form-compo2.css',
})
export class FormCompo2 {
  form: FormGroup;
  fb = new FormBuilder();
  imc = 0;

  /*constructor() {
    this.form = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      edad: [0, [Validators.required, Validators.min(18), Validators.max(100)]],
      peso: [0, [Validators.required, Validators.min(50), Validators.max(200)]],
      altura: [0, [Validators.required, Validators.min(1.50), Validators.max(2.50)]],
    });
  }*/
  /*constructor() {
    this.form = this.fb.group(
      {
        id: [0, Validators.required],
        nombre: ['', Validators.required, Validators.minLength(8), Validators.maxLength(50)],
        edad: ['', Validators.required, Validators.minLength(18), Validators.maxLength(100)],
        peso: [0, Validators.required, Validators.minLength(50), Validators.maxLength(200)],
        altura: [0, Validators.required, Validators.minLength(1.50), Validators.maxLength(2.50)],
      }
    )
  }*/
 constructor(){
  
  this.form = new FormGroup({
    id: new FormControl('',Validators.required),
    nombre: new FormControl(Validators.required, Validators.minLength(8)),
    edad: new FormControl(Validators.required, Validators.minLength(18)),
    peso: new FormControl(Validators.required,Validators.minLength(50)),
    altura: new FormControl(Validators.required, Validators.minLength(1.50)),
  });
  }
   calculaIMC() {

    if (this.form.value.peso && this.form.value.altura) {
      this.imc = +(this.form.value.peso / (this.form.value.altura * this.form.value.altura)).toFixed(2);
    }
  }

  /*calculaIMC(){
    if(this.fb){
      const peso = this.fb.value.peso!;
      const altura = this.fb.value.altura!;
      this.imc = +(peso / (altura * altura)).toFixed(2);
    }
  }*/
}
