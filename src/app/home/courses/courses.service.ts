import { Injectable } from '@angular/core';
import { Course } from '../../core/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses: Course[] = [
    {
      title: 'HTML & Web Foundations',
      description: 'Build the foundation of modern web applications with semantic HTML and best practices'
    },
    {
      title: 'Modern CSS & Design',
      description: 'Create stunning user interfaces with advanced CSS techniques and modern design principles'
    },
    {
      title: 'JavaScript Mastery',
      description: 'Develop interactive web applications with modern JavaScript and popular frameworks'
    },
  ];

  getCourses(): Course[] {
    return [...this.courses];
  }

  getCourseByType(type: 'html' | 'css' | 'javascript'): Course {
    switch (type) {
      case 'html': return this.courses[0];
      case 'css' : return this.courses[1];
      case 'javascript': return this.courses[2]
    }
  }
}
