import { Component } from '@angular/core';

@Component({
  selector: 'app-header-small',
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.scss'],
})
export class HeaderSmallComponent {
  goToTop() {
    window.scrollTo(0, 0);
  }
}
