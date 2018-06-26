import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorderRadiusComponent } from './border-radius.component';

const routes: Routes = [
  {
    path: '',
    component: BorderRadiusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorderRadiusRoutingModule { }
