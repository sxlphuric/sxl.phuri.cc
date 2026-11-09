import { Component, ElementRef, ViewChild } from '@angular/core';
import { MarkdownTitle } from '../markdown/title/title';
import { TitleLower } from '../markdown/title-lower/title-lower';
import { LinkButtons } from '../link-buttons/link-buttons';
import { TableData } from '../../classes/table-data';
import { DataTable } from '../data-table/data-table';
import { Quote } from '../markdown/quote/quote';
import { HomePage } from '../pages/home-page/home-page';
import { ProjectsPage } from '../pages/projects-page/projects-page';
import { StuffPage } from '../pages/stuff-page/stuff-page';
import { GalleryPage } from '../pages/gallery-page/gallery-page';

@Component({
  selector: 'app-content-container',
  imports: [MarkdownTitle, TitleLower, LinkButtons,
    DataTable, Quote, HomePage,
    ProjectsPage, StuffPage, GalleryPage],
  templateUrl: './content-container.html',
  styleUrl: './content-container.scss',
})
export class ContentContainer {
  aboutMeTableData: TableData[] = [
      {header: "pronouns",data:"he/him"},
      {header: "passion",data:"cooking"},
      {header: "from",data:"canada"},
    ];

  websiteUpdateData: TableData[] = [
    {header: "2.0.0", data: "new website style!"}
  ]

  @ViewChild("home") currentTab!: ElementRef<HTMLButtonElement>;

  updateCurrentTab(e: HTMLButtonElement) {
    this.currentTab.nativeElement.classList.remove("active");
    e.classList.add("active");
    this.currentTab = new ElementRef<HTMLButtonElement>(e);
  };
}
