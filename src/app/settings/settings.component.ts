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
  @Output() colorSchemeEmitter = new EventEmitter<string>();
  @Output() displayEmitter = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  detectPrefersColorScheme(): string {
    // Detect if prefers-color-scheme is supported
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      // Set colorScheme to Dark if prefers-color-scheme is dark. Otherwise, set it to Light.
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'Light Mode'
        : 'Dark Mode';
    } else {
      // If the browser does not support prefers-color-scheme, set the default to dark.
      return 'Light Mode';
    }
  }

  close(): void {
    this.displayEmitter.emit();
  }

  changeColorScheme(): void {
    // If the color scheme is light, then change it to dark.
    if (this.colorScheme === 'Light Mode') {
      document.body.classList.add('dark-theme');
      this.colorScheme = 'Dark Mode';
    } else {
      // Otherwise, change it back to light.
      document.body.classList.remove('dark-theme');
      this.colorScheme = 'Light Mode';
    }
    this.colorSchemeEmitter.emit(this.colorScheme);
    this.close();
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
