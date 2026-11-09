import { Component,input } from '@angular/core';

@Component({
  selector: 'app-md-quote',
  imports: [],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
})
export class Quote {
  text = input.required();
}
