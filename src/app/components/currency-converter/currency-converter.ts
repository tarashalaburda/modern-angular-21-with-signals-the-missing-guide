import { Component, computed, DestroyRef, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RATES } from './rates';
import { BehaviorSubject, interval, map, startWith, switchMap } from 'rxjs';
import { outputFromObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-currency-converter',
  imports: [CurrencyPipe],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.scss',
})
export class CurrencyConverter {
  private destroyRef = inject(DestroyRef);

  readonly manualRefresh$ = new BehaviorSubject<void>(undefined);

  readonly refreshRequired$ = this.manualRefresh$.pipe(
    switchMap(() =>
      interval(5000).pipe(
        startWith(0),
        map(() => {}),
        takeUntilDestroyed(this.destroyRef),
      ),
    ),
  );

  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly refreshRequired = outputFromObservable(this.refreshRequired$);

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());
}
