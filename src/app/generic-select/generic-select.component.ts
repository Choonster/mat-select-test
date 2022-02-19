import { Component, ContentChild, Input } from '@angular/core';
import { OptionsTemplateDirective as OptionsTemplateDirective } from '../options-template/options-template.directive';
import { SelectListItem } from '../SelectListItem';

@Component({
  selector: 'app-generic-select',
  templateUrl: './generic-select.component.html',
  styleUrls: ['./generic-select.component.scss'],
})
export class GenericSelectComponent {
  @Input() label: string | undefined;
  @Input() items: SelectListItem[] | undefined;

  @ContentChild(OptionsTemplateDirective) contentTemplate:
    | OptionsTemplateDirective
    | undefined;
}
