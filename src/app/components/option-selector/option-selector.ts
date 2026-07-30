import { Component, contentChild, input, model } from '@angular/core';
import { OptionDirective } from './option.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-option-selector',
  imports: [NgTemplateOutlet],
  templateUrl: './option-selector.html',
  styleUrl: './option-selector.scss',
})
export class OptionSelector {
  readonly options = input.required<string[]>();

  readonly templateDirective = contentChild(OptionDirective);

  readonly selected = model.required<string>();

  select(option: string): void {
    this.selected.set(option);
  }
}
