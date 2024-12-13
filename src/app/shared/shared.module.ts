import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

const COMMON_MODULES = [
  CommonModule
];

const COMMON_COMPONENTS = [
  LoaderComponent
];

@NgModule({
  declarations: [],
  imports: [
    ...COMMON_MODULES,
    ...COMMON_COMPONENTS
  ], 
  exports: [
    ...COMMON_MODULES,
    ...COMMON_COMPONENTS
  ]
})
export class SharedModule { }
