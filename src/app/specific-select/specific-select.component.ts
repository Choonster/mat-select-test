import { Component, OnInit } from '@angular/core';
import { SelectListItem } from '../SelectListItem';

@Component({
  selector: 'app-specific-select',
  templateUrl: './specific-select.component.html',
  styleUrls: ['./specific-select.component.scss'],
})
export class SpecificSelectComponent {
  readonly items: SelectListItem[] = [
    { Text: 'Option 1', Value: 1 },
    { Text: 'Option 2', Value: 2 },
    { Text: 'Option 3', Value: 3 },
  ];

  readonly otherItem: SelectListItem = { Text: 'Option 1', Value: 1 };
}
