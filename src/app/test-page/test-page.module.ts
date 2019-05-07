import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageComponent } from './test-page.component';
import { Routes, RouterModule } from '@angular/router';
const roter: Routes = [
  {
    path: '',
    component: TestPageComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(roter)
  ],
  declarations: [TestPageComponent]
})
export class TestPageModule { }
