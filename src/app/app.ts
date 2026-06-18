import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  counter = 0;

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;
      this.cdr.detectChanges();
    }, 3000)
  }
}
