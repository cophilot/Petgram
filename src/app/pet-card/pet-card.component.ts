import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent {
  hugged:boolean = false;
  hugButtonText:string = "Hug";

  @Input() text:string = "";
  @Input() img:string = "";

  @ViewChild('heart')
  heart!: ElementRef;
  @ViewChild('bigHeart')
  bigHeart!: ElementRef;
  


  hug() {
    if(this.heart == null) {
      console.error("Something went wrong: heart is null")
      return;
    }
    if(this.hugged) {
      this.heart.nativeElement.style.display = "none";
      this.hugButtonText = "Hug";
      
    } else {
      this.bigHeart.nativeElement.style.display = "block";
      this.hugButtonText = "Unhug";
      setTimeout(() => {
        this.bigHeart.nativeElement.style.display = "none";
        this.heart.nativeElement.style.display = "block";
      }, 1000);
    }
    this.hugged = !this.hugged;

  }
}
