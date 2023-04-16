import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Petgram';
  posts = [
    {
      img: 'assets/pets/1.jpg',
      text: 'Superslon activated!😎'
    },
    {
      img: 'assets/pets/2.jpg',
      text: 'Hello I am Ralph and I like food...'
    },
    {
      img: 'assets/pets/3.jpg',
      text: 'Mr. Kaninchen is here!🐰'
    },
  ];
  proposals = [
    {
      img: 'assets/pets/3.jpg',
      name: 'Mr. Kaninchen',
      description: '2 Years old'
    },
    {
      img: 'assets/pets/4.jpg',
      name: 'Robby',
      description: '23 Years old'
    },
  ];
}
