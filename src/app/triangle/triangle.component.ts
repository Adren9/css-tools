import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Triangle } from './triangle';
import { TriangleService } from './triangle.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {

  tool: Triangle = {
    lineSegmentA: 100,
    lineSegmentB: 100,
    lineSegmentH: 150,
    borderOfLineSegmentA: 'border-left',
    borderOfLineSegmentB: 'border-right',
    borderOfLineSegmentH: 'border-bottom',
    rotation: 0,
    color: {
      hex: '#fc4a1a',
      opacity: 1,
      css: '#fc4a1a'
    }
  };

  showColorPicker = false;

  constructor(
    private toolService: TriangleService,
    private appTitle: Title
  ) {
    appTitle.setTitle('CSS3 Tools - Triangle generator.');
  }

  ngOnInit() {
  }

  getPreviewStyle() {
    return this.toolService.getPreviewStyle(this.tool);
  }

  getLabelAStyle() {
    return {
      top: this.tool.lineSegmentH + 'px',
      left: -1 * this.tool.lineSegmentA / 2 - 10 + 'px',
      transform: `rotate(${-1 * this.tool.rotation}deg)`
    };
  }

  getLabelBStyle() {
    return {
      top: this.tool.lineSegmentH + 'px',
      left: this.tool.lineSegmentB / 2 + 'px',
      transform: `rotate(${-1 * this.tool.rotation}deg)`
    };
  }

  getLabelHStyle() {
    return {
      top: this.tool.lineSegmentH / 2 + 'px',
      left: '5px',
      transform: `rotate(${-1 * this.tool.rotation}deg)`
    };
  }

  rotateLeft() {
    if (this.tool.rotation === 0) {
      this.tool.rotation = 270;
    } else {
      this.tool.rotation -= 90;
    }

    this.adjustBorderSides();
  }

  rotateRight() {
    if (this.tool.rotation === 270) {
      this.tool.rotation = 0;
    } else {
      this.tool.rotation += 90;
    }

    this.adjustBorderSides();
  }

  adjustBorderSides() {
    if (this.tool.rotation === 0) {
      this.tool.borderOfLineSegmentH = 'border-bottom';
      this.tool.borderOfLineSegmentA = 'border-left';
      this.tool.borderOfLineSegmentB = 'border-right';
    } else if (this.tool.rotation === 90) {
      this.tool.borderOfLineSegmentH = 'border-left';
      this.tool.borderOfLineSegmentA = 'border-top';
      this.tool.borderOfLineSegmentB = 'border-bottom';
    } else if (this.tool.rotation === 180) {
      this.tool.borderOfLineSegmentH = 'border-top';
      this.tool.borderOfLineSegmentA = 'border-right';
      this.tool.borderOfLineSegmentB = 'border-left';
    } else if (this.tool.rotation === 270) {
      this.tool.borderOfLineSegmentH = 'border-right';
      this.tool.borderOfLineSegmentA = 'border-bottom';
      this.tool.borderOfLineSegmentB = 'border-top';
    }
  }

  onColorChange(color) {
    this.tool.color.hex = color.hex;
    this.tool.color.opacity = color.opacity;
    this.tool.color.css = color.opacity === 1 ? color.hex : color.getCssRGBA();
  }

  getCssPreview() {
    return this.toolService.getCssPreview(this.tool);
  }

  @HostListener('document:mousedown')
  onDocumentMouseDown() {
    this.showColorPicker = false;
  }
}
