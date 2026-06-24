import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, firstValueFrom, map } from 'rxjs';

type Options = Record<string, string>;

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly a$ = new BehaviorSubject<number>(1);
  readonly b$ = new BehaviorSubject<number>(2);

  readonly sum$ = combineLatest([this.a$, this.b$]).pipe(map(([a, b]) => a + b));

  async incrementA() {
    // only increment A if A + B is less than 10

    const sum = await firstValueFrom(this.sum$);

    console.log('sum -', sum);

    if (sum < 10) {
      this.a$.next(this.a$.value + 1);
    }
  }

  readonly option$ = new BehaviorSubject<Options>({ r: 'Red', g: 'Green', b: 'Blue' });

  readonly selectedKey$ = new BehaviorSubject<string>('b');

  readonly selectedValue$ = combineLatest([this.option$, this.selectedKey$]).pipe(
    debounceTime(0),
    map(([options, key]) => options[key]),
  );

  switchOptions() {
    this.option$.next({ m: 'Magenta', y: 'Yellow', c: 'Cyan' });
    this.selectedKey$.next('c');
  }

  constructor() {
    this.selectedValue$.subscribe(console.log);
  }
}
