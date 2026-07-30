import {
  computed,
  Directive,
  effect,
  HostBinding,
  HostListener,
  input,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appRgb]',
  // host: {
  //   '[style.color]': 'color()',
  //   '(click)': 'invert()'
  // }
})
export class RgbDirective {
  readonly red = input(0);
  readonly green = input(0);
  readonly blue = input(0);

  readonly inverted = signal(false);

  @HostBinding('style.color')
  actualColor = '';

  readonly color = computed(() =>
    this.inverted()
      ? `rgb(${255 - this.red()}, ${255 - this.green()}, ${255 - this.blue()})`
      : `rgb(${this.red()}, ${this.green()}, ${this.blue()})`,
  );

  @HostListener('click')
  invert() {
    this.inverted.update((v) => !v);
  }

  constructor() {
    effect(() => {
      this.actualColor = this.color();
    });
  }
}
