import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { Profile } from '../profile';
import { URL_REGEX } from '../../core/constants/URL_REGEX';

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
    name: ['', [Validators.required]],
    title: ['', [Validators.required]],
    bio: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(240)]],
    website: ['', [Validators.pattern(URL_REGEX)]],
    github: ['']
  }, { updateOn: 'blur' });

  constructor() {
    this.profileForm.valueChanges.pipe(
      takeUntilDestroyed(),
      tap(profile => this.onUpdateProfile(profile))
    ).subscribe();
  }

  onUpdateProfile(profile: Profile): void {
    this.profileService.setProfile(profile);
  }

  onSaveProfile(): void {
    if (!this.profileForm.valid) {
      alert('Please complete the form');
      return;
    }
    console.log(this.profileForm.value);
  }
}
