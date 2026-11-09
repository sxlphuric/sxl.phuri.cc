import { Component, input } from '@angular/core';

@Component({
  selector: 'app-md-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class MarkdownTitle {
  text = input.required();
}
