import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

import { SidenavService } from '../sidenav/sidenav.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navItems;

  constructor(
    public sidenavService: SidenavService,
    private router: Router
  ) {
    this.navItems = sidenavService.getNavigationItems();
    router.events.subscribe((e: RouterEvent) => {
      this.changeSidenavState(e);
    });
  }

  ngOnInit() {
  }

  changeSidenavState(e: RouterEvent) {
    if (e instanceof NavigationEnd) {
      this.sidenavService.close();
    }
  }
}
