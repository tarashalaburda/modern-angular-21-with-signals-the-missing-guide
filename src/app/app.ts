import { Component, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly api = inject(ApiService);

  readonly number = signal(10);

  readonly number$ = toObservable(this.number);

  readonly results$ = this.number$.pipe(
    switchMap((number) => this.api.getPrimeFactors(number))
  );

  readonly primeFactors = toSignal(this.results$, {
    initialValue: [],
  });

  increase() {
    this.number.update((n) => n + 1);
  }

  decrease() {
    this.number.update((n) => Math.max(n - 1, 3));
  }

  constructor() {
    this.number$.subscribe((n) => {
      console.log('Number changed to', n);
    });
  }
}
