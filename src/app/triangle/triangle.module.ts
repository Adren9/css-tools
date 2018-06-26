import { NgModule } from '@angular/core';

// Material
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from '../shared/shared.module';
import { TriangleRoutingModule } from './triangle-routing.module';
import { ColorPickerModule } from '../color-picker/color-picker.module';

import { TriangleService } from './triangle.service';
import { TriangleComponent } from './triangle.component';

@NgModule({
  imports: [
    SharedModule,
    TriangleRoutingModule,
    ColorPickerModule,
    MatSliderModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [
    TriangleService
  ],
  declarations: [
    TriangleComponent
  ]
})
export class TriangleModule { }
