import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {
  @Input() text:String = "";
  @Input() img:String = "";
  @ViewChild('heart')
  heart!: ElementRef;

   like() {
     console.log(this.heart);
    if(this.heart != null) {
      this.heart.nativeElement.style.display = "block";
    }

    /* let heart = document.getElementById("heart");
    if(heart != null) {
      heart.style.display = "block";
    } */
  }
}
