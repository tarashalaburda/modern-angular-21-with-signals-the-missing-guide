import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RATES } from './components/currency-converter/rates';
import { CurrencyConverter } from './components/currency-converter/currency-converter';
@Component({
  selector: 'app-root',
  imports: [CurrencyConverter, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly currencies = Object.keys(RATES);

  amount = new FormControl(100);
  currency = new FormControl('USD');

  refreshData(): void {
    console.log('🤷‍♀️🤷‍♀️🤷‍♀️🤷‍♀️');
  }
}
