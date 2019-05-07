import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaneDirective } from '../directives/pane.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaneDirective],
  exports: [PaneDirective]
})
export class SharedModule { }
