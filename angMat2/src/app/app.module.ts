// ... other import statements ...
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  // ... declarations property ...
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  // ... providers and bootstrap properties ...
})
export class AppModule {}