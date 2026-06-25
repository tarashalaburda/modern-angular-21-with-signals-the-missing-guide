import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  showCounter = false;

  toggleCounter() {
    this.showCounter = !this.showCounter;
  }
}
