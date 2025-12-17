import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { CoursesService } from '../courses/courses.service';
import { AsyncPipe } from '@angular/common';
import { CourseCardComponent } from '../courses/course-card/course-card.component';
import { URL_REGEX } from '../../core/constants/URL_REGEX';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    CourseCardComponent
  ],
  styleUrls: ['contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);
  private coursesService = inject(CoursesService);
  contactForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    course: ['', [Validators.required]],
    message: [''],
    avatarUrl: ['', [Validators.pattern(URL_REGEX)]]
  }, { updateOn: 'blur' });
  selectedCourse$ = this.contactForm.valueChanges.pipe(
    map(form => form.course),
    filter(course => course !== ''),
    distinctUntilChanged(),
    map(course => this.coursesService.getCourseByType(course)),
  );
  avatarUrl$ = this.contactForm.get('avatarUrl')!.valueChanges;

  onSubmitForm() {
    if (!this.contactForm.valid) {
      alert('Please finish filling in the form before submitting.');
      return;
    }
    console.log(this.contactForm.value);
  }
}
