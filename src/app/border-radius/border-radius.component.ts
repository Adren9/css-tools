import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BorderRadius } from './border-radius';
import { BorderRadiusService } from './border-radius.service';

@Component({
  selector: 'app-border-radius',
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.scss']
})
export class BorderRadiusComponent implements OnInit {

  tool: BorderRadius = {
    radius: {
      all: 10,
      topLeft: 10,
      topRight: 10,
      bottomRight: 10,
      bottomLeft: 10
    },
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: {
      hex: '#000000',
      opacity: 1,
      css: '#000000'
    },
    width: 200,
    height: 200,
    backgroundColor: '#fc4a1a'
  };

  borderStyleValues: string[];
  showBorderColorPicker = false;

  constructor(
    private toolService: BorderRadiusService,
    private appTitle: Title
  ) {
    this.borderStyleValues = toolService.getBorderStyleValues();
    appTitle.setTitle('CSS3 Tools - Border-Radius generator.');
  }

  ngOnInit() {
  }

  changeAllCorners(value) {
    for (const corner in this.tool.radius) {
      if (typeof this.tool.radius[corner] !== 'undefined') {
        this.tool.radius[corner] = value;
      }
    }
  }

  onBorderColorChange(color) {
    this.tool.borderColor.hex = color.hex;
    this.tool.borderColor.opacity = color.opacity;
    this.tool.borderColor.css = color.opacity === 1 ? color.hex : color.getCssRGBA();
  }

  getCssPreview() {
    return this.toolService.getCssPreview(this.tool);
  }

  getPreviewStyle() {
    return this.toolService.getPreviewStyle(this.tool);
  }

  @HostListener('document:mousedown')
  onDocumentMouseDown() {
    this.showBorderColorPicker = false;
  }
}
