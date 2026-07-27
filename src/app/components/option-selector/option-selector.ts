import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-option-selector',
  imports: [],
  templateUrl: './option-selector.html',
  styleUrl: './option-selector.scss',
})
export class OptionSelector {
  options = input.required<string[]>();

  selected = model.required<string>();

  select(option: string): void {
    this.selected.set(option);
  }
}
