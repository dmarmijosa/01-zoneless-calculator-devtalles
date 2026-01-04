import {
  Component,
  ElementRef,
  HostBinding,
  input,
  output,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.html',
  styleUrls: ['./calculator-button.css'],
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  },
})
export class CalculatorButton {
  onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
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

  handleClick() {
    if (!this.contentValue()!?.nativeElement) return;

    const value = this.contentValue()!.nativeElement.innerText;
    console.log(value);
    this.onClick.emit(value.trim());
  }
}
