import { interval } from 'rxjs';
import { DestroyRef, inject } from '@angular/core';

export function startCounting() {
  const dr = inject(DestroyRef);
  const sub = interval(1000).subscribe(console.log);
  dr.onDestroy(() => sub.unsubscribe());
}
