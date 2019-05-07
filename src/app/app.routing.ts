import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'index-page',
    pathMatch: 'full'
  },
  {
    // 首页
    path: 'index-page',
    loadChildren: './index-page/index-page.module#IndexPageModule'
  }
  ,
  {
    // 首页
    path: 'test-page',
    loadChildren: './test-page/test-page.module#TestPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
