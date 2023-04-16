import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
  @Input() img: string="";
  @Input() name: string="";
  @Input() description: string="";
}
