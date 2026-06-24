import { Component, signal } from '@angular/core';
import { MySignal, mySignal } from './my-signal';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // readonly firstSignal = signal<number>(42);
  // readonly secondSignal = signal<string>('Signal');

  // for test
  readonly firstSignal = mySignal<number>(42);
  readonly secondSignal = mySignal<string>('Signal');

  constructor() {
    console.log('firstSignal', this.firstSignal());
  }

  setSignal() {
    this.firstSignal.set(10);
  }

  updateSignal() {
    this.firstSignal.update(value => value + 1);
  }
}
