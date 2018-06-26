import { Injectable, ElementRef } from '@angular/core';
import { GradientColorStop } from './gradient-color-stop';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { GradientType } from './gradient-type.enum';

@Injectable()
export class GradientService {

  constructor(private sanitizer: DomSanitizer) { }

  getCssValue(colorStops: GradientColorStop[], type: GradientType, direction: number): SafeStyle {
    const cssColorStops = this.getCssColorStops(colorStops);

    if (type === GradientType.Linear) {
      return this.sanitizer.bypassSecurityTrustStyle(
        `linear-gradient(${direction}deg, ${cssColorStops})`
      );
    } else if (type === GradientType.Radial) {
      return this.sanitizer.bypassSecurityTrustStyle(
        `radial-gradient(${cssColorStops})`
      );
    }
  }

  getPointerPosition(location: number, locationPanel: ElementRef): number {
    const panelWidth = parseInt(window.getComputedStyle(locationPanel.nativeElement).width, 10);
    return location / 100 * panelWidth;
  }

  getCssPreview(colorStops: GradientColorStop[], type: GradientType, direction?: number): string {
    const cssColorStops = this.getCssColorStops(colorStops);

    let output = '';

    if (type === GradientType.Linear) {
      output += `background: -moz-linear-gradient(${-1 * direction + 90}deg, ${cssColorStops}); \n`;
      output += `background: -webkit-linear-gradient(${ -1 * direction + 90}deg, ${cssColorStops}); \n`;
      output += `background: linear-gradient(${direction}deg, ${cssColorStops}); \n`;
    } else if (type === GradientType.Radial) {
      for (const prefix of ['-moz-', '-webkit-', '']) {
        output += `background: ${prefix}radial-gradient(${cssColorStops}); \n`;
      }
    }

    return output;
  }

  orderColorStopsByLocation(colorStops: GradientColorStop[]) {
    return colorStops.sort((a, b) => {
      return a.location > b.location ? 1 : -1;
    });
  }

  private getCssColorStops(colorStops: GradientColorStop[]) {
    return colorStops.map((colorStop) => {
      return `${colorStop.color.css} ${colorStop.location}%`;
    }).join(', ');
  }
}
