import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appOption]',
})
export class OptionDirective {
  readonly template = inject(TemplateRef<string>);
}
