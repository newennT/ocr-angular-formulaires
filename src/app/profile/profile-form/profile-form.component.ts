import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  private formBuilder = inject(FormBuilder);
  private profileService = inject(ProfileService);
  profileForm = this.formBuilder.group({
    name: [''],
    title: [''],
    bio: [''],
    website: [''],
    github: ['']
  });

  constructor() {
    this.profileForm.valueChanges.pipe(
      takeUntilDestroyed(),
      tap(profile => this.onUpdateProfile(profile))
    ).subscribe();
  }

  onUpdateProfile(profile: Profile): void {
    this.profileService.setProfile(profile);
  }
}
