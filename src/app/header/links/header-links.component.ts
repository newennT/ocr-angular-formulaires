import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-links',
  imports: [
    RouterLink
  ],
  template: `
		<ul>
			<li><a routerLink="home">Home</a></li>
			<li><a routerLink="." fragment="courses">Courses</a></li>
			<li><a routerLink="." fragment="contact">Contact</a></li>
      <li><a routerLink="profile">Profile</a></li>
		</ul>
  `,
  styles: `
    ul {
      display: flex;
      list-style: none;
      gap: 3rem;
    }

    a {
      text-decoration: none;
      color: #e2e8f0;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      position: relative;
      cursor: pointer;
    }

    a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      transition: width 0.3s ease;
    }

    a:hover {
      color: #818cf8;
    }

    a:hover::after {
      width: 100%;
    }`
})
export class HeaderLinksComponent {

}
