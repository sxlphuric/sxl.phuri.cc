import { Component } from '@angular/core';
import { MarkdownTitle } from '../markdown/title/title';
import { TitleLower } from '../markdown/title-lower/title-lower';
import { LinkButtons } from '../link-buttons/link-buttons';
import { TableData } from '../../classes/table-data';
import { DataTable } from '../data-table/data-table';

@Component({
  selector: 'app-content-container',
  imports: [MarkdownTitle,TitleLower,LinkButtons,DataTable],
  templateUrl: './content-container.html',
  styleUrl: './content-container.scss',
})
export class ContentContainer {
  aboutMeTableData: TableData[] = [
      {header: "pronouns",data:"he/him"},
      {header: "passion",data:"cooking"},
      {header: "from",data:"canada"},
    ];
}
