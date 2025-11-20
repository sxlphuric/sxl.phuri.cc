import { Component, signal } from "@angular/core";
import { Nav } from "./components/nav/nav";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

@Component({
  selector: "app-root",
  imports: [Nav, Main, Footer],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("sxlphuric-website");
}
