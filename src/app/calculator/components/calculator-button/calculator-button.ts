import { Component, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrls: ['./calculator-button.css'],
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  },
  encapsulation: ViewEncapsulation.None,
})
export class CalculatorButton {
  isCommand = input(false, {
    transform: (value: boolean | string) => (typeof value === 'string' ? value === '' : value),
  });

  isDoubleSize = input(false, {
    transform: (value: boolean | string) => (typeof value === 'string' ? value === '' : value),
  });

  // @HostBinding('class.isCommand')
  // get isCommandClass() {
  //   return this.isCommand();
  // }

  @HostBinding('class.w-2/4')
  get isDoubleSizeClass() {
    return this.isDoubleSize();
  }
}
