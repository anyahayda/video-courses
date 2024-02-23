import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent, HeaderComponent} from "./core";
import {CoursesListComponent} from "./features/courses";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CoursesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
