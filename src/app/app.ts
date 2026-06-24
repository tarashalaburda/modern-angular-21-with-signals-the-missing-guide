import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, map } from 'rxjs';

type Options = Record<string, string>;

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly option$ = new BehaviorSubject<Options>({ r: 'Red', g: 'Green', b: 'Blue' });

  readonly selectedKey$ = new BehaviorSubject<string>('b');

  readonly selectedValue$ = combineLatest([this.option$, this.selectedKey$]).pipe(
    debounceTime(0),
    map(([options, key]) => options[key])
  );

  switchOptions() {
    this.option$.next({ m: 'Magenta', y: 'Yellow', c: 'Cyan' });
    this.selectedKey$.next('c');
  }

  constructor() {
    this.selectedValue$.subscribe(console.log);
  }
}
