import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CssPreviewComponent } from './components/css-preview/css-preview.component';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';
import { PointerDirective } from './directives/pointer.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [
    PointerDirective,
    CssPreviewComponent,
    NumericInputComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    PointerDirective,
    CssPreviewComponent,
    NumericInputComponent,
  ]

})
export class SharedModule { }
