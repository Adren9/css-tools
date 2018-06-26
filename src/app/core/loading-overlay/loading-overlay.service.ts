import { Injectable } from '@angular/core';

@Injectable()
export class LoadingOverlayService {
  isVisible = true;

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
}
