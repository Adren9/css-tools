import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'border-radius-generator',
    loadChildren: './border-radius/border-radius.module#BorderRadiusModule'
  },
  {
    path: 'box-shadow-generator',
    loadChildren: './box-shadow/box-shadow.module#BoxShadowModule'
  },
  {
    path: 'gradient-generator',
    loadChildren: './gradient/gradient.module#GradientModule'
  },
  {
    path: 'triangle-generator',
    loadChildren: './triangle/triangle.module#TriangleModule'
  },
  {
    path: '',
    redirectTo: '/border-radius-generator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
