import { Injectable } from '@angular/core';

import { Triangle } from './triangle';

@Injectable()
export class TriangleService {

  constructor() { }

  getPreviewStyle(tool: Triangle) {
    return {
      width: 0,
      height: 0,
      borderBottom: `${tool.lineSegmentH}px solid ${tool.color.css}`,
      borderLeft: tool.lineSegmentA + 'px solid transparent',
      borderRight: tool.lineSegmentB + 'px solid transparent',
      borderTop: 0,
      transform: `rotate(${tool.rotation}deg)`
    };
  }

  getCssPreview(tool: Triangle) {
    let output = '';
    output += 'width: 0; \n';
    output += 'height: 0; \n';
    output += `${tool.borderOfLineSegmentH}: ${tool.lineSegmentH}px solid ${tool.color.css}; \n`;
    output += `${tool.borderOfLineSegmentA}: ${tool.lineSegmentA}px solid transparent; \n`;
    output += `${tool.borderOfLineSegmentB}: ${tool.lineSegmentB}px solid transparent; \n`;

    return output;
  }
}
