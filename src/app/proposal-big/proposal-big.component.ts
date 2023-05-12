import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proposal-big',
  templateUrl: './proposal-big.component.html',
  styleUrls: ['./proposal-big.component.scss'],
})
export class ProposalBigComponent {
  @Output() closeEmitter = new EventEmitter<string>();

  @Input() img: string = '';
  @Input() name: string = '';
  @Input() description: string = '';

  close() {
    this.closeEmitter.emit();
  }
}
