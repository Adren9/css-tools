import { NgModule } from '@angular/core';

// Material
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from '../shared/shared.module';
import { BoxShadowRoutingModule } from './box-shadow-routing.module';
import { ColorPickerModule } from '../color-picker/color-picker.module';

import { BoxShadowComponent } from './box-shadow.component';
import { BoxShadowService } from './box-shadow.service';



@NgModule({
  imports: [
    SharedModule,
    BoxShadowRoutingModule,
    ColorPickerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  providers: [
    BoxShadowService
  ],
  declarations: [
    BoxShadowComponent
  ]
})
export class BoxShadowModule { }
