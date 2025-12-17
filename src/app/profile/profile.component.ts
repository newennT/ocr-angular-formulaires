import { Component } from '@angular/core';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';

@Component({
  selector: 'app-profile',
  imports: [
    ProfileFormComponent,
    ProfilePreviewComponent
  ],
  template: `
		<main class="profile-page">
			<div class="profile-container">
				<div class="profile-grid">
          <app-profile-form/>
          <app-profile-preview/>
        </div>
      </div>
    </main>
  `,
  styles: `
    .profile-page {
      padding: 8rem 7% 4rem;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }

    .profile-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  `
})
export class ProfileComponent {

}
