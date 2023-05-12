import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent {
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() description: string = '';

  bigVisible: boolean = false;
  allowOpen: boolean = true;

  openBig() {
    if (!this.allowOpen) return;
    this.bigVisible = true;
  }
  closeBig() {
    this.bigVisible = false;
    this.allowOpen = false;

    setTimeout(() => {
      this.allowOpen = true;
    }, 1000);
  }
}
