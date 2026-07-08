import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly x = signal(10);

  readonly isLarge = signal(false);

  readonly xLarge = computed(() => this.x() > 12)

  constructor() {
    effect(async () => {
      if (this.x() > 12) {
        console.log('x is greater than 12');

        await new Promise(resolve => setTimeout(resolve, 100));

        this.isLarge.set(true);
      }
    });
  }

  incrementX() {
    this.x.update((v) => v + 1);
  }
}
