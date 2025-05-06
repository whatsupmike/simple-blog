import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  isMenuOpen = false;
  menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
 