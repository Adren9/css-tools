import { Injectable } from '@angular/core';

import { BorderRadius } from './border-radius';

@Injectable()
export class BorderRadiusService {

  constructor() { }

  getBorderStyleValues() {
      return [
        'solid',
        'dotted',
        'dashed',
        'double',
        'groove',
        'ridge',
        'inset',
        'outset'
      ];
  }

  getPreviewStyle(tool: BorderRadius) {
    return {
      borderTopLeftRadius: tool.radius.topLeft + 'px',
      borderTopRightRadius: tool.radius.topRight + 'px',
      borderBottomRightRadius: tool.radius.bottomRight + 'px',
      borderBottomLeftRadius: tool.radius.bottomLeft + 'px',
      border: `${tool.borderWidth}px ${tool.borderStyle} ${tool.borderColor.css}`,
      width: tool.width + 'px',
      height: tool.height + 'px',
      backgroundColor: tool.backgroundColor
    };
  }

  getCssPreview(tool: BorderRadius) {

    const topLeft = tool.radius.topLeft + 'px';
    const topRight = tool.radius.topRight + 'px';
    const bottomRight = tool.radius.bottomRight + 'px';
    const bottomLeft = tool.radius.bottomLeft + 'px';

    const allEqual = [topLeft, topRight, bottomRight, bottomLeft]
      .every(value => value === topLeft);

    let borderRadius;

    if (allEqual) {
      borderRadius = 'border-radius: ' + topLeft;
    } else {
      borderRadius = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    }

    let output = '';

    const borderRadiusPrefixes = ['-moz-', '-webkit-', ''];

    for (const prefix of borderRadiusPrefixes) {
      output += `${prefix}${borderRadius}; \n`;
    }

    if (tool.borderWidth > 0) {
      output += `border: ${tool.borderWidth}px ${tool.borderStyle} ${tool.borderColor.css}; \n`;
    }

    return output;
  }
}
