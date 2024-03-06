import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './courses-search.component.html',
  styleUrl: './courses-search.component.scss'
})
export class CoursesSearchComponent {
  inputValue: string = '';

  constructor() { }

  onSearch(): void {
    console.log('Input value:', this.inputValue);
  }
}
