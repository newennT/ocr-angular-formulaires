import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [
    FormsModule
  ],
  styleUrls: ['./newsletter.component.scss'],
  template: `
		<section class="newsletter">
			<div class="newsletter-container">
				<h2>Stay Updated</h2>
				<p>Get the latest web development tips and tutorials in your inbox</p>
				<form #newsletterForm="ngForm"
              class="newsletter-form"
              (ngSubmit)="onSubmitForm(newsletterForm)">
					<input type="email"
                 name="emailAddress"
                 [(ngModel)]="userEmail"
                 placeholder="Enter your email" 
                 required>
					<input type="email"
								 name="alternateEmailAddress"
								 [(ngModel)]="alternateEmail"
								 placeholder="Enter your email"
								 required>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</section>
  `,
})
export class NewsletterComponent {
  userEmail: string = 'me@my-house.com';
  alternateEmail: string = '';

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }
}
