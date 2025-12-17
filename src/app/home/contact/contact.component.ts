import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CoursesService } from '../courses/courses.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap, map, filter, distinctUntilChanged  } from 'rxjs';
import { CourseCardComponent } from '../courses/course-card/course-card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    CourseCardComponent,
    AsyncPipe,

  ],
  styleUrls: ['contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);
  private coursesService = inject(CoursesService);
  contactForm = this.formBuilder.group({
    name: [''],
    email: [''],
    course: [''],
    message: ['']
  });

  selectedCourse$ = this.contactForm.valueChanges.pipe(
    map(form => form.course),
    filter(course => course !== ''),
    distinctUntilChanged(),
    map(course => this.coursesService.getCourseByType(course)),
  );

  onSubmitForm(): void{
    console.log(this.contactForm.value);
  }

}
