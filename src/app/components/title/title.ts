import { Component, signal, effect, computed } from "@angular/core";

@Component({
  selector: "app-title",
  imports: [],
  templateUrl: "./title.html",
  styleUrl: "./title.scss",
})
export class Title {
  clicks = signal(0);
  baseThreshold = 5;
  threshold = this.baseThreshold;
  currentString = "hi, i'm";

  strings = [
    "my real name is not",
    "website by",
    "i am",
    "it's who?",
    "welcome to my page!",
  ];

  // Basically use an effect and if the clicks are higher than 20 then return the easter egg text
  title = computed(() => {
    if (this.clicks() >= this.threshold) {
      this.threshold += this.baseThreshold;
      this.currentString = this.strings[Math.floor(Math.random() * this.strings.length)];
      return this.currentString;
    } else {
      return this.currentString;
    }
  });

  addCounter() {
    this.clicks.update((value) => value + 1);

  }
}
