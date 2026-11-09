import { Component } from '@angular/core';
import { MarkdownTitle } from '../../markdown/title/title';
import { LinkButtons } from '../../link-buttons/link-buttons';

@Component({
  selector: 'page-home',
  imports: [MarkdownTitle,LinkButtons],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
