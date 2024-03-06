import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseItemComponent} from "../course-item/course-item.component";
import {CoursesSearchComponent} from "../courses-search/courses-search.component";
import {CourseFormComponent} from "../course-form/course-form.component";
import {BreadcrumbsComponent} from "../../../../core";
import {CourseModel} from "../../models/course.model";
import {courseData} from "../../../../mockData/data";

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [BreadcrumbsComponent, CourseItemComponent, CoursesSearchComponent, CourseFormComponent, CommonModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {
  courses: CourseModel[] = courseData;

  constructor() { }

  onCourse(courseId: number): void {
    console.log('Course id: ', courseId)
  }

  onLoadMore(): void {
    console.log('Load more clicked');
  }

  trackById(_index: number, course: CourseModel): number {
    return course.id;
  }
}
