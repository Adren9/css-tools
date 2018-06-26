import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxShadowComponent } from './box-shadow.component';

const routes: Routes = [
  {
    path: '',
    component: BoxShadowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxShadowRoutingModule { }
