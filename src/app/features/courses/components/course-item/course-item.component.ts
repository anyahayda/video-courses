import {Component, Input, EventEmitter, Output} from '@angular/core';
import { CourseModel } from "../../models/course.model";

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss'
})
export class CourseItemComponent {

  @Input() course!: CourseModel;
  @Output() courseClicked = new EventEmitter<number>();

  constructor() { }

  onCourse(courseId: number) {
    this.courseClicked.emit(courseId);
  }

}
