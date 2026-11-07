import { Component } from "@angular/core";
import { Title } from "../title/title";
import { MarkdownTitle } from "../markdown/title/title";
import { TitleLower } from "../markdown/title-lower/title-lower";
import { Quote } from "../markdown/quote/quote";
import { LinkButtons } from "../link-buttons/link-buttons";
import { ContentContainer } from "../content-container/content-container";
import { TableData } from "../../classes/table-data";

@Component({
  selector: "app-main",
  imports: [Title, ContentContainer],
  templateUrl: "./main.html",
  styleUrl: "./main.scss",
})
export class Main {
  }
