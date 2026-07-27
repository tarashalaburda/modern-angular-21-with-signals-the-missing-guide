import { Component, computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RATES } from './rates';
import { BehaviorSubject, interval, map, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { outputFromObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-currency-converter',
  imports: [CurrencyPipe],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.scss',
})
export class CurrencyConverter {
  readonly manualRefresh$ = new BehaviorSubject<void>(undefined);

  private readonly stop$ = new Subject<void>();

  stopRefresh(): void {
    this.stop$.next();
  }

  readonly refreshRequired$ = this.manualRefresh$.pipe(
    switchMap(() => interval(2000).pipe(startWith(0))),
    map(() => {}),
    takeUntilDestroyed(),
    takeUntil(this.stop$),
  );

  // --------------------

  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly refreshRequired = outputFromObservable(this.refreshRequired$);

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());
}
