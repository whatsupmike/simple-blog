import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.next(savedTheme === 'dark');
      this.updateTheme(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.next(prefersDark);
      this.updateTheme(prefersDark);
    }
  }

  toggleTheme() {
    const newValue = !this.isDarkMode.value;
    this.isDarkMode.next(newValue);
    this.updateTheme(newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  }

  private updateTheme(isDark: boolean) {
    document.documentElement.classList.toggle('dark-theme', isDark);
  }
} 