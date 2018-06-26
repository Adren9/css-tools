import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material/core';

// Material
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';
import { CopyToClipboardService } from './services/copy-to-clipboard.service';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { LoadingOverlayService } from './loading-overlay/loading-overlay.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent,
    LoadingOverlayComponent
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    SidenavService,
    CopyToClipboardService,
    LoadingOverlayService
  ],
  exports: [
    BrowserAnimationsModule,
    HeaderComponent,
    SidenavComponent,
    LoadingOverlayComponent
  ]
})
export class CoreModule { }
