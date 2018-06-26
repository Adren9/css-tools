import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BoxShadow } from './box-shadow';
import { BoxShadowService } from './box-shadow.service';

@Component({
  selector: 'app-box-shadow',
  templateUrl: './box-shadow.component.html',
  styleUrls: ['./box-shadow.component.scss']
})
export class BoxShadowComponent implements OnInit {

  tool: BoxShadow = {
    hOffset: 10,
    vOffset: 10,
    blur: 5,
    spread: 1,
    shadowColor: {
      hex: '#000000',
      opacity: 1,
      css: '#000000'
    },
    inset: false,
    boxColor: {
      hex: '#fc4a1a',
      opacity: 1,
      css: '#fc4a1a'
    },
    width: 200,
    height: 200
  };

  showShadowColorPicker = false;
  showBackgroundColorPicker = false;

  constructor(
    private toolService: BoxShadowService,
    private appTitle: Title
  ) {
    appTitle.setTitle('CSS3 Tools - Box-Shadow generator.');
  }

  ngOnInit() {
  }

  getPreviewStyle() {
    return this.toolService.getPreviewStyle(this.tool);
  }

  onBackgroundColorChange(color) {
    this.tool.boxColor.hex = color.hex;
    this.tool.boxColor.opacity = color.opacity;
    this.tool.boxColor.css = color.opacity === 1 ? color.hex : color.getCssRGBA();
  }

  onShadowColorChange(color) {
    this.tool.shadowColor.hex = color.hex;
    this.tool.shadowColor.opacity = color.opacity;
    this.tool.shadowColor.css = color.opacity === 1 ? color.hex : color.getCssRGBA();
  }

  getCssPreview() {
    return this.toolService.getCssPreview(this.tool);
  }

  @HostListener('document:mousedown')
  onDocumentMouseDown() {
    this.showShadowColorPicker = false;
    this.showBackgroundColorPicker = false;
  }
}
