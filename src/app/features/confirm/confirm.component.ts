import { Component, Input } from "@angular/core";
import { Article } from "src/app/core/models/article.model";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.css"],
  imports: [RouterLink],
  standalone: true,
})
export class ConfirmComponent {
  alerte() {
    window.alert("Vous devez cliquer sur la date pour ouvrir l article");
  }
}
