import { Injectable } from '@angular/core';

@Injectable()
export class CopyToClipboardService {

  constructor() { }

  copyTextContent(element) {
    return this.copy(element.textContent);
  }

  copy(text) {
    const textArea = document.createElement('textarea');

    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';

    document.body.appendChild(textArea);
    textArea.select();

    const result = document.execCommand('copy');

    document.body.removeChild(textArea);

    return result;
  }
}
