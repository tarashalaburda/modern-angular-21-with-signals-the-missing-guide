import { Component, computed, effect, linkedSignal, signal } from '@angular/core';
import { MySignal, mySignal } from './my-signal';
import { PRODUCTS } from './products';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly products = signal(['Apple', 'Banana', 'Chery']);

  readonly selectedProduct = linkedSignal<string[], string>({
    source: this.products,
    computation: (prod, prev) => {
      if (!prev) return prod[0];
      if (prod.includes(prev.value)) return prev.value;

      return prod[0];
    },
  });

  addProduct() {
    this.products.update((prods) => [...prods, PRODUCTS[prods.length]]);
  }

  removeProduct() {
    this.products.update((prods) => prods.slice(0, -1));
  }

  nextProduct() {
    this.selectedProduct.update((selected) => {
      const index = this.products().indexOf(selected);

      return this.products()[index + (1 % this.products().length)];
    });
  }

  previousProduct() {
    this.selectedProduct.update((selected) => {
      const index = this.products().indexOf(selected);

      return this.products()[index - 1 + (this.products().length % this.products().length)];
    });
  }
}
