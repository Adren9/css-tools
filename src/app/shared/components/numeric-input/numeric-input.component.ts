import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss']
})
export class NumericInputComponent implements OnInit {

  @Input() min;
  @Input() max;
  @Input() value;
  @Output('input') input = new EventEmitter();

  @Input() id;

  constructor() { }

  ngOnInit() {
  }

  onInput(event) {
    event.stopPropagation();
    let value = event.target.value;

    // Allow to type '-' if min is < 0
    if (this.min < 0 && value === '-') {
      // Input value stays same as before "-", but value to be sent is 0
      this.input.emit(0);
      return;
    }

    value = parseInt(value, 10);

    // Parsing failed (input value is empty or is not a correct a number)
    if (!value && value !== 0) {
      // Change input value to empty string and send 0
      event.target.value = '';
      this.input.emit(0);
      return;
    }

    // Don't allow user to type value smaller than specified minimum
    if (this.min && value < this.min) {
      // Change input value to minimum value and send the value
      event.target.value = this.min;
      this.input.emit(this.min);
      return;
    }

    // Don't allow user to type value higher than specified maximum
    if (this.max && value > this.max) {
      // Change input value to maximum value and send the value
      event.target.value = this.max;
      this.input.emit(this.max);
      return;
    }

    // Value is correct, change input value to parsed value
    event.target.value = value;
    this.input.emit(value);
  }

}
