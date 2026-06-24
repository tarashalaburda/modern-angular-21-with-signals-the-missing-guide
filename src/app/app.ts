import { Component, signal } from '@angular/core';
import { mySignal } from './my-signal';

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
}
