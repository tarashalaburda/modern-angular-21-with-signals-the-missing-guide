import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class App {
  counter = 0;

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;
      console.log('setInterval counter', this.counter);
    }, 1000);

    // setInterval(() => {
    //   this.cdr.detectChanges();
    // }, 5000)
  }

  calculateValue() {
    console.log('calculateValue value', );
    return 42;
  }

  doNothing(): void {
  }
}
