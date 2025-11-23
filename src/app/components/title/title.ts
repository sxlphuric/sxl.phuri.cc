import { Component, signal, effect, computed } from "@angular/core";

@Component({
  selector: "app-title",
  imports: [],
  templateUrl: "./title.html",
  styleUrl: "./title.scss",
})
export class Title {
  clicks = signal(0);
  threshold = 25;

  // Basically use an effect and if the clicks are higher than 20 then return the easter egg text
  title = computed(() => {
    if (this.clicks() >= 40) {
      return "No, there's no more ";
    } else if (this.clicks() >= 25) {
      return "Congrats, you found the ";
    } else {
      return "Hi, I'm ";
    }
  });
  boldtitle = computed(() => {
    if (this.clicks() >= 40) {
      return "gimmicks";
    } else if (this.clicks() >= 25) {
      return "secret";
    } else {
      return "sxlphuric";
    }
  });

  addCounter() {
    this.clicks.update((value) => value + 1);
  }
}
