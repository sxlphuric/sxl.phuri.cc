import { Component, input } from '@angular/core';

@Component({
  selector: 'app-md-title-lower',
  imports: [],
  templateUrl: './title-lower.html',
  styleUrl: './title-lower.scss',
})
export class TitleLower {
  text = input.required();
}
