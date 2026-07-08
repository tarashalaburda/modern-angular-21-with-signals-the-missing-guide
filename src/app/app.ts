import { Component, effect, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly names = signal(['Alice', 'Bob', 'Charlie']);

  readonly person = signal({ name: 'Joni', age: 32 });

  constructor() {
    setTimeout(() => {
      this.names().push('David');
      // this.names.update((names) => [...names, 'David']);

      this.person.update(person => ({...person, name: 'Din'}))

      console.log('Adding David to the list of names ', this.names());
    }, 2000)

    effect(() => {
      console.log('the names are ', this.names());
      console.log('person change  ', this.person());
    });
  }
}
