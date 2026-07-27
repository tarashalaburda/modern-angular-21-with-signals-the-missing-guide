import { Component, computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RATES } from './rates';

@Component({
  selector: 'app-currency-converter',
  imports: [CurrencyPipe],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.scss',
})
export class CurrencyConverter {
  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());
}
