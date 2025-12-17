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
				<form class="newsletter-form" #newsletterForm="ngForm" (ngSubmit)="onSubmitForm(newsletterForm)">
					<input type="email" placeholder="Enter your email" name="emailAdress" [(ngModel)]="userEmail" required>
					<input type="email" name="alternateEmailAddress" [(ngModel)]="alternateEmail" placeholder="Enter another email" required>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</section>
  `,
})
export class NewsletterComponent {
	userEmail: string = 'my@my-house.com';
	alternateEmail: string = 'my@my-home.com';

	onSubmitForm(form: NgForm) {
		console.log(form.value);
	}

}
