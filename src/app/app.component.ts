import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ButtonComponent } from "./components/button/button.component";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { radixBell } from "@ng-icons/radix-icons";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, NgIconComponent],
  viewProviders: [provideIcons({ radixBell })],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "frontend-assignment";
}
