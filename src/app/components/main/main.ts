import { Component } from "@angular/core";
import { Title } from "../title/title";
import { LinkButtons } from "../link-buttons/link-buttons";

@Component({
  selector: "app-main",
  imports: [Title, LinkButtons],
  templateUrl: "./main.html",
  styleUrl: "./main.scss",
})
export class Main {}
