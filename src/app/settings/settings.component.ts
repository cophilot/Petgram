import {
  Component,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  colorScheme: string = this.detectPrefersColorScheme();
  animalMode: string = '🐶';

  @Output() animalModeEmitter = new EventEmitter<string>();
  @Output() displayEmitter = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {
    this.setColorScheme();
  }

  detectPrefersColorScheme(): string {
    // Detect if prefers-color-scheme is supported
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise, set it to Light.
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? '☀️'
        : '🌙';
    } else {
      // If the browser does not support prefers-color-scheme, set the default to dark.
      return '☀️';
    }
  }

  close(): void {
    this.displayEmitter.emit();
  }

  changeColorScheme(): void {
    this.colorScheme = this.colorScheme == '☀️' ? '🌙' : '☀️';
    this.setColorScheme();
    this.close();
  }

  setColorScheme(): void {
    if (this.colorScheme == '☀️') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  changeAnimalMode(): void {
    // If the animal mode is dogs, then change it to cats.
    if (this.animalMode === '🐶') {
      this.animalMode = '🐱';
    } else {
      // Otherwise, change it back to dogs.
      this.animalMode = '🐶';
    }
    this.animalModeEmitter.emit(this.animalMode);
    this.close();
  }
}
