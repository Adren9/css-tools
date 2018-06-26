import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { SidenavService } from './core/sidenav/sidenav.service';
import { LoadingOverlayService } from './core/loading-overlay/loading-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public sidenav: SidenavService,
    private loadingOverlay: LoadingOverlayService,
    private router: Router
  ) {
    router.events.subscribe((e: RouterEvent) => {
      this.changeLoadingOverlayState(e);
    });
  }

  changeLoadingOverlayState(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      this.loadingOverlay.show();
    } else if (
      e instanceof NavigationEnd ||
      e instanceof NavigationCancel ||
      e instanceof NavigationError
    ) {
      this.loadingOverlay.hide();
    }
  }
}
