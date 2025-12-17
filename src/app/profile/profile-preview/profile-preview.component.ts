import { Component, inject } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-preview',
  imports: [],
  templateUrl: './profile-preview.component.html',
  styleUrls: ['./profile-preview.component.scss']
})
export class ProfilePreviewComponent {
  private profileService = inject(ProfileService);
  profile = this.profileService.getProfile();
}
