import {
  AfterViewInit,
  Component,
  effect,
  OnInit,
  signal,
  viewChild,
  viewChildren,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RATES } from './components/currency-converter/rates';
import { CurrencyConverter } from './components/currency-converter/currency-converter';
import { OptionSelector } from './components/option-selector/option-selector';
@Component({
  selector: 'app-root',
  imports: [CurrencyConverter, ReactiveFormsModule, OptionSelector],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnInit {
  // @ViewChild(CurrencyConverter) currencyConverter?: CurrencyConverter;

  currentConverters = viewChildren(CurrencyConverter);

  myRefDiv = viewChild.required('myRef', { read: ViewContainerRef });

  currencyConverter = viewChild.required(CurrencyConverter);

  stopRefresh(): void {
    console.log('🪀🪀🪀🪀 stopRefresh');
    // this.currencyConverter().stopRefresh();

    for (const converter of this.currentConverters()) {
      converter.stopRefresh();
    }
  }

  constructor() {
    // console.log('App constructor view child required signal value is ', this.currencyConverter());
    effect(() => {
      console.log('effect', this.currencyConverter());
    });
  }
  ngOnInit(): void {
    console.log('!!! ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log(
      'App ngAfterViewInit view child required signal value is ',
      this.currencyConverter(),
    );
  }

  readonly currencies = Object.keys(RATES);

  amount = new FormControl(100);
  currency = signal('GBP');

  refreshData(): void {
    console.log('🤷‍♀️🤷‍♀️🤷‍♀️🤷‍  refreshData️');
  }
}
