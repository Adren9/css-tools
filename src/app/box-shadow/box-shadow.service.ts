import { Injectable } from '@angular/core';

import { BoxShadow } from './box-shadow';

@Injectable()
export class BoxShadowService {

  constructor() { }

  getPreviewStyle(tool: BoxShadow) {
    const boxShadow = `${tool.hOffset}px ${tool.vOffset}px ${tool.blur}px ${tool.spread}px
                       ${tool.shadowColor.css} ${tool.inset ? 'inset' : ''}`;
    return {
      boxShadow: boxShadow,
      backgroundColor: tool.boxColor.css,
      width: tool.width + 'px',
      height: tool.height + 'px'
    };
  }

  getCssPreview(tool: BoxShadow) {
    const hOffset = tool.hOffset + 'px';
    const vOffset = tool.vOffset + 'px';
    const blur = tool.blur + 'px';
    const spread = tool.spread + 'px';
    const color = tool.shadowColor.css;
    const inset = tool.inset;

    const boxShadow = `${hOffset} ${vOffset} ${blur} ${spread} ${color}${inset ? ' inset' : ''}`;
    const boxShadowPrefixes = ['-moz-', '-webkit-', ''];

    let output = '';
    for (const prefix of boxShadowPrefixes) {
      output += `${prefix}box-shadow: ${boxShadow}; \n`;
    }

    return output;
  }
}
