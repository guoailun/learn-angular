import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { PaneDirectiveModule } from '../directives/pane.directive';

@NgModule({
  imports: [
    CommonModule,
    PaneDirectiveModule
  ],
  declarations: [TabComponent],
  exports: [TabComponent]
})
export class TabModule { }
