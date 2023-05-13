import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent {
  hugged: boolean = false;
  hugButtonText: string = 'Hug';

  @Input() text: string = '';
  @Input() imgURL: string = '';

  @ViewChild('heart')
  heart!: ElementRef;
  @ViewChild('bigHeart')
  bigHeart!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  onImageLoad(): void {
    const imgHeight =
      this.elementRef.nativeElement.querySelector('img').clientHeight;

    this.heart.nativeElement.style.top = imgHeight - 60 + 'px';

    this.bigHeart.nativeElement.style.height =
      (imgHeight > 400 ? 400 : imgHeight) + 'px';
    this.bigHeart.nativeElement.style.width =
      (imgHeight > 400 ? 400 : imgHeight) + 'px';
    let left = (400 - imgHeight) / 2;
    this.bigHeart.nativeElement.style.left = left < 0 ? 0 : left + 'px';
  }

  hug() {
    if (this.heart == null || this.bigHeart == null) {
      console.error('Something went wrong: heart is null');
      return;
    }

    if (this.hugged) {
      this.heart.nativeElement.style.display = 'none';
      this.hugButtonText = 'Hug';
    } else {
      this.bigHeart.nativeElement.style.display = 'block';
      this.bigHeart.nativeElement.classList.add('show');
      this.hugButtonText = 'Unhug';
      setTimeout(() => {
        this.heart.nativeElement.style.display = 'block';
        //this.bigHeart.nativeElement.style.opacity = '100%';
        this.bigHeart.nativeElement.classList.remove('show');
        this.bigHeart.nativeElement.classList.add('hidden');
        setTimeout(() => {
          this.bigHeart.nativeElement.style.display = 'none';
        }, 500);
      }, 1500);
    }
    this.hugged = !this.hugged;
  }
}
