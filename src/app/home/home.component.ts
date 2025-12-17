import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './courses/courses.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactComponent } from './contact/contact.component';
import { SkillAssessmentComponent } from './skill-assessment/skill-assessment.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CoursesComponent,
    NewsletterComponent,
    ContactComponent,
    SkillAssessmentComponent
  ],
  template: `
    <app-hero id="hero"/>
    <app-newsletter/>
    <app-skill-assessment/>
    <app-courses id="courses"/>
    <app-contact id="contact"/>
  `,
  styles: ``
})
export class HomeComponent {

}
