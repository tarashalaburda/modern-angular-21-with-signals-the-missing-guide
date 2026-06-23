import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly counter$ = interval(1000);

  calculateValue() {
    console.log('calculateValue value');
    return 42;
  }
}
