import { Calculator } from '@/calculator/components/calculator/calculator';
import { Component } from '@angular/core';

@Component({
  selector: 'calculator-view',
  imports: [Calculator],
  templateUrl: './calculator-view.html',
})
export default class CalculatorView {}
