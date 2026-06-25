import { Component } from '@angular/core';
import { startCounting } from '../../utils';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  constructor() {
    // startCounting();
  }

  ngOnInit() {
    startCounting();
  }
}
