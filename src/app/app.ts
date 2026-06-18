import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  counter = 0;

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;
      console.log('setInterval counter', this.counter);
    }, 1000);

    setInterval(() => {

      this.cdr.detectChanges();
    }, 5000)
  }

  doNothing(): void {
  }
}
