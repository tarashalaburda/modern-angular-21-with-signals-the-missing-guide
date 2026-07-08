import { Component, DestroyRef, inject, Injector, runInInjectionContext } from '@angular/core';
import { startCounting } from '../../utils';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  private dr = inject(DestroyRef);

  private injector = inject(Injector);

  constructor() {
    // startCounting();
  }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      startCounting();
    });
  }
}
