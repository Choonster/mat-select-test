import { Component, OnInit } from '@angular/core';
import { SelectListItem } from '../SelectListItem';

@Component({
  selector: 'app-basic-select',
  templateUrl: './basic-select.component.html',
  styleUrls: ['./basic-select.component.scss'],
})
export class BasicSelectComponent {
  readonly items: SelectListItem[] = [
    { Text: 'Option 1', Value: 1 },
    { Text: 'Option 2', Value: 2 },
    { Text: 'Option 3', Value: 3 },
  ];
}
