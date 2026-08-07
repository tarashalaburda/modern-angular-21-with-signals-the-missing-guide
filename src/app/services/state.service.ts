import { Injectable, resource, Signal, signal } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  readonly apiBase = 'http://localhost:3000/api/books';
  readonly wsBase = 'ws://localhost:3000/ws';

  #keyword = signal<string>('the');

  #searchResult = resource({
    params: () => ({ keyword: this.#keyword() }),
    loader: (options) => this.#searchKeyWordPromise(options.params.keyword, options.abortSignal),
    defaultValue: [],
  });

  get keyword(): Signal<string> {
    return this.#keyword.asReadonly();
  }

  get searchResult() {
    return this.#searchResult.asReadonly();
  }

  setKeyword(value: string) {
    console.log('Keyword changes to value,', value);
    this.#keyword.set(value);
  }

  #searchKeyWordPromise(value: string, abortSignal?: AbortSignal): Promise<Book[]> {
    return fetch(`${this.apiBase}/search?q=${value}`, { signal: abortSignal }).then((res) =>
      res.json(),
    );
  }
}
