import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent) },
  { path: 'profile', loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent) },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
