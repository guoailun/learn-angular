import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { Routes, RouterModule } from '@angular/router';
import { TabModule } from '../tab/tab.module';
import { PaneDirectiveModule } from '../directives/pane.directive';

const appRoutes: Routes = [
  {
    // 首页
    path: '',
    component: IndexPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    PaneDirectiveModule,
    TabModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [IndexPageComponent]
})
export class IndexPageModule { }
