import { NgModule } from '@angular/core';

// Material
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedModule } from '../shared/shared.module';
import { BorderRadiusRoutingModule } from './border-radius-routing.module';
import { ColorPickerModule } from '../color-picker/color-picker.module';

import { BorderRadiusService } from './border-radius.service';
import { BorderRadiusComponent } from './border-radius.component';

@NgModule({
  imports: [
    SharedModule,
    BorderRadiusRoutingModule,
    ColorPickerModule,
    MatSliderModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: [
    BorderRadiusService
  ],
  declarations: [
    BorderRadiusComponent
  ]
})
export class BorderRadiusModule { }
