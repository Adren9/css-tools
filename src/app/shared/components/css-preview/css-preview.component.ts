import { Component, OnInit, Input } from '@angular/core';

import { CopyToClipboardService } from '../../../core/services/copy-to-clipboard.service';


@Component({
  selector: 'app-css-preview',
  templateUrl: './css-preview.component.html',
  styleUrls: ['./css-preview.component.scss']
})
export class CssPreviewComponent implements OnInit {

  @Input() content;
  constructor(private copyService: CopyToClipboardService) { }

  ngOnInit() {
  }

  copyToClipboard(element) {
    this.copyService.copyTextContent(element);
  }
}
