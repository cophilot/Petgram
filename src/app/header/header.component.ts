import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() showSettingsEmitter = new EventEmitter<string>();

  goToTop() {
    window.scrollTo(0, 0);
  }

  showSettings() {
    this.showSettingsEmitter.emit();
  }
}
