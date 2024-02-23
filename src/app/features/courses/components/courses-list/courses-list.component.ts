import {Component} from '@angular/core';
import {CourseItemComponent} from "../course-item/course-item.component";
import {CoursesSearchComponent} from "../courses-search/courses-search.component";
import {CourseFormComponent} from "../course-form/course-form.component";
import {BreadcrumbsComponent} from "../../../../core";

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [BreadcrumbsComponent, CourseItemComponent, CoursesSearchComponent, CourseFormComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {

  constructor() {
  }

}
