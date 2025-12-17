import { Injectable, Signal, signal } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilePreview = signal<Profile>({
    name: '',
    title: '',
    bio: '',
    website: '',
    github: '',
  });

  getProfile(): Signal<Profile> {
    return this.profilePreview.asReadonly();
  }

  setProfile(profile: Profile): void {
    this.profilePreview.set(profile);
  }
}
