import { NgModule } from '@angular/core';

// Material
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from '../shared/shared.module';
import { GradientRoutingModule } from './gradient-routing.module';
import { ColorPickerModule } from '../color-picker/color-picker.module';

import { GradientComponent } from './gradient.component';
import { GradientService } from './gradient.service';

@NgModule({
  imports: [
    SharedModule,
    GradientRoutingModule,
    ColorPickerModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatTooltipModule
  ],
  providers: [
    GradientService
  ],
  declarations: [
    GradientComponent
  ]
})
export class GradientModule { }
