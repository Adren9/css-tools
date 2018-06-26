import { Injectable } from '@angular/core';

@Injectable()
export class SidenavService {

  isOpened = false;

  constructor() { }

  open() {
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
  }

  getNavigationItems() {
    return [
      { link: '/border-radius-generator', title: 'Border-Radius Generator' },
      { link: '/box-shadow-generator', title: 'Box-Shadow Generator' },
      { link: '/triangle-generator', title: 'Triangle Generator' },
      { link: '/gradient-generator', title: 'Gradient Generator' }
    ];
  }
}
