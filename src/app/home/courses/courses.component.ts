import { Component, inject } from '@angular/core';
import { Course } from '../../core/models/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  imports: [
    CourseCardComponent
  ],
  styleUrls: ['./courses.component.scss'],
  template: `
		<section id="courses" class="courses">
			<h2>Master Your Skills</h2>
			<div class="course-grid">
				@for (course of courses; track course.title) {
					<app-course-card [course]="course"/>
				}
			</div>
		</section>
  `
})
export class CoursesComponent {
  coursesService = inject(CoursesService);
  courses: Course[] = this.coursesService.getCourses();
}
