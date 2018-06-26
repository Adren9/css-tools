import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { GradientColorStop } from './gradient-color-stop';
import { GradientType } from './gradient-type.enum';
import { GradientService } from './gradient.service';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.scss']
})
export class GradientComponent implements OnInit {

  @ViewChild('locationPanel') locationPanel;

  colorStops: GradientColorStop[] = [
    {
      color: {
        hex: '#ff0000',
        opacity: 1,
        css: '#ff0000'
      },
      location: 0,
      pointerPosition: 0,
    },
    {
      color: {
        hex: '#00ff00',
        opacity: 1,
        css: '#00ff00'
      },
      location: 100,
      pointerPosition: 0,
    }
  ];

  // Make enum available in template
  GradientType = GradientType;

  gradientDirection = 90;
  gradientType = GradientType.Linear;

  // Currently edited color-stop
  activeColorStop: GradientColorStop = this.colorStops[0];

  constructor(
    private gradientService: GradientService,
    private appTitle: Title
  ) {
    gradientService.orderColorStopsByLocation(this.colorStops);
    appTitle.setTitle('CSS3 Tools - Gradient generator.');
  }

  ngOnInit() {
    for (const colorStop of this.colorStops) {
      colorStop.pointerPosition = this.gradientService.getPointerPosition(
        colorStop.location,
        this.locationPanel
      );
    }
  }

  changeActiveColorStop(colorStop: GradientColorStop) {
    this.activeColorStop = colorStop;
  }

  getGradientForPreview() {
    return this.gradientService.getCssValue(
      this.colorStops,
      this.gradientType,
      this.gradientDirection
    );
  }

  getGradientForLocationPanel() {
    return this.gradientService.getCssValue(
      this.colorStops,
      GradientType.Linear,
      90
    );
  }

  onPointerPositionChange(position, colorStop: GradientColorStop) {
    colorStop.location = position.x.percentage;
    colorStop.pointerPosition = position.x;

    this.gradientService.orderColorStopsByLocation(this.colorStops);
  }

  onGradientPanelClick(e: MouseEvent) {
    const panelWidth = parseInt(
      window.getComputedStyle(this.locationPanel.nativeElement).width,
      10
    );
    const panelLeft = this.locationPanel.nativeElement.getBoundingClientRect().left;

    // Position in relation to location panel
    const pointerPosition = e.clientX - panelLeft;

    // Percentage value of the pointer position
    const location = Math.round(pointerPosition / panelWidth * 100);

    const newColorStop: GradientColorStop = {
      color: {
        hex: '#ff0000',
        opacity: 1,
        css: '#ff0000'
      },
      location: location,
      pointerPosition: pointerPosition
    };

    this.addColorStop(newColorStop);
  }

  addColorStop(colorStop: GradientColorStop) {
    this.colorStops.push(colorStop);
    this.changeActiveColorStop(colorStop);
    this.gradientService.orderColorStopsByLocation(this.colorStops);
  }

  onButtonRemoveClick(e: MouseEvent, colorStop: GradientColorStop) {
    e.stopPropagation();
    this.removeColorStop(colorStop);
  }

  removeColorStop(colorStop: GradientColorStop) {
    if (!this.checkColorStopCanBeRemoved()) {
      return;
    }

    if (this.activeColorStop === colorStop) {
      this.changeActiveColorStop(this.colorStops[0]);
    }

    const index = this.colorStops.indexOf(colorStop);
    this.colorStops.splice(index, 1);
  }

  checkColorStopCanBeRemoved() {
    return this.colorStops.length > 2;
  }

  onColorChange(color) {
    this.activeColorStop.color.hex = color.hex;
    this.activeColorStop.color.opacity = color.opacity;
    this.activeColorStop.color.css = color.opacity === 1 ? color.hex : color.getCssRGBA();
  }

  onLocationInputChange(location: number, colorStop) {
    colorStop.location = location;
    colorStop.pointerPosition = this.gradientService.getPointerPosition(location, this.locationPanel);
  }

  getCssPreview() {
    return this.gradientService.getCssPreview(this.colorStops, this.gradientType, this.gradientDirection);
  }
}
