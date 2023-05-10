import { HostListener,Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Petgram';

  smallHeaderDisplay:string = 'none';
  bigHeaderDisplay:string = 'block';


  posts = shuffle([
    /*
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
    {
      img: 'assets/pets/5.jpg',
      text: 'The best avocado in town!🥑'
    }, */
  ]); 
  
  proposals = shuffle([
    {
      img: 'assets/pets/3.jpg',
      name: 'Mr. Kaninchen',
      description: 'Warning: I am a bad boy!😎'
    },
    {
      img: 'assets/pets/4.jpg',
      name: 'Robby',
      description: '23 Years old and still single...'
    },
    {
      img: 'assets/pets/6.jpg',
      name: 'Zibi',
      description: 'Am I black with white strips or white with black strips?'
    },
  ]);

  ngOnInit() {
    this.loadMore();
  }

  @HostListener('window:scroll', ['$event'])

  OnScroll(event:any) {
    let value = window.scrollY;
    if(value > 0){
      this.smallHeaderDisplay = 'block';
      this.bigHeaderDisplay = 'none';
    }else{
      this.smallHeaderDisplay = 'none';
      this.bigHeaderDisplay = 'block';
    }
  }
async  getRandomCatPicture(): Promise<string>  {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;
  } catch (error) {
    console.error('Error fetching cat picture:', error);
  }
  return "";
}

getRandomCatPictureArray(count:number): Promise<string[]> {
  return Promise.all(Array.from({length: count}, () => this.getRandomCatPicture()));
}

loadMore(){
  this.getRandomCatPictureArray(5).then((urls) => {
    this.posts = this.posts.concat(urls.map((url) => {
      return {
        img: url,
        text: getRandomCatComment()
      }
    }));
  });

  this.getRandomCatPictureArray(3).then((urls) => {
    this.proposals = urls.map((url) => {
      return {
        img: url,
        name: getRandomCatName(),
        description: getRandomCatDescription()
      }
    });
  });
}

}



/**
 * Shuffles array in place.
 * @param array The array to shuffle
 * @returns The shuffled array
 */
function shuffle(array: any[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function getRandomCatComment(): string{
  const comments = [  {"comment": "Feed me now, human!"},  {"comment": "Scratch my back, please"},  {"comment": "Nap time, don't disturb"},  {"comment": "Stop touching my belly!"},  {"comment": "Purrfect day to sleep in"},  {"comment": "Chase me, I dare you!"},  {"comment": "Get that laser, human!"},  {"comment": "I own this house, human"},  {"comment": "Pet me, I'm adorable"},  {"comment": "I want more treats, please"},  {"comment": "Let me outside, now!"},  {"comment": "Where's my catnip, human?"},  {"comment": "Play with me, right meow"},  {"comment": "I love you, human"},  {"comment": "Too much noise, leave"},  {"comment": "Bring me a mouse, please"},  {"comment": "I'm the boss, remember?"},  {"comment": "I'm so fluffy and cute!"},  {"comment": "This box is mine, human"},  {"comment": "Time for my beauty nap"},  {"comment": "Stop typing, pet me!"},  {"comment": "I want attention, meow!"},  {"comment": "Feed me again, human!"},  {"comment": "The sun is my bed"},  {"comment": "Please brush my fur, human"},  {"comment": "I'm not a lapcat!"},  {"comment": "What's for dinner, human?"},  {"comment": "Can't you see I'm sleeping?"},  {"comment": "I'm the cutest cat!"},  {"comment": "Bring me a toy, now!"},  {"comment": "I need a new bed"},  {"comment": "I want to go outside"},  {"comment": "Cuddle with me, human"},  {"comment": "Where's my cat tower, human?"},  {"comment": "No, I don't want that!"},  {"comment": "Why are you still here?"},  {"comment": "I'm the king of this!"},  {"comment": "Don't leave me alone, human!"},  {"comment": "I'm so hungry, meow!"},  {"comment": "I need a scratching post"},  {"comment": "You're not my real mom"},  {"comment": "Give me some milk, please"},  {"comment": "I'm watching you, human!"},  {"comment": "I'm feeling so cozy"},  {"comment": "I need a new toy"},  {"comment": "Pet me more, please!"},  {"comment": "Leave me alone, human!"},  {"comment": "I'm not in the mood"},  {"comment": "Why so much noise, human?"},  {"comment": "Can you rub my belly?"},{"comment": "🐾 Feed me, human!"},{"comment": "😻 This bed is purrfect!"},{"comment": "🐾 Play with me, please!"},{"comment": "😸 I'm the cat's meow"},{"comment": "🐾 I want more treats!"},{"comment": "😼 This box is mine now"},{"comment": "🐾 Let me outside, meow!"},{"comment": "😺 Pet me, human, meow!"},{"comment": "🐾 I'm not fat, just fluffy 😸"},{"comment": "😻 This sunbeam feels amazing!"},{"comment": "🐾 I need a new toy 🧸"},{"comment": "😸 I'm not lazy, just chillin'"},{"comment": "🐾 Let me sleep, human 😴"},{"comment": "😼 I'm too cool for school 😎"},{"comment": "🐾 I want a catnip mouse 🐁"},{"comment": "😺 I'm not a lapcat 🙅‍♀️"},{"comment": "🐾 Gimme that feather wand!"},{"comment": "😻 I love chin scratches 😽"},{"comment": "🐾 I'm not a pest, just curious 🕵️‍♂️"},{"comment": "😼 This shelf is my domain 🐱‍👤"},{"comment": "🐾 I want a new bed 🛏️"},{"comment": "😸 I'm not a morning cat ☀️"},{"comment": "🐾 I'm not aloof, just independent 🧍‍♀️"},{"comment": "😺 I want to go outside! 🌳"},{"comment": "🐾 I want a scratching post 🐈"},{"comment": "😻 I'm not grumpy, just sleepy 😴"},{"comment": "🐾 I'm not a toy, human 🤖"},{"comment": "😸 I'm not a lapdog 🙅‍♂️"},{"comment": "🐾 I'm the ruler of this house 👑"},{"comment": "😼 Let me explore, human 🕵️‍♀️"},{"comment": "🐾 I need a new litter box 🚽"},{"comment": "😺 I'm not begging, just asking 🙏"},{"comment": "🐾 I want a window seat 🪟"},{"comment": "😻 This blanket is so soft 😴"},{"comment": "🐾 I'm not a kitten anymore 🐱"},{"comment": "😸 I'm not grumpy, just bored 🙄"},{"comment": "🐾 Let me climb, human 🧗‍♀️"},{"comment": "😼 I'm not scared, just cautious 🙀"},{"comment": "🐾 I want a new collar 👔"},{"comment": "😺 Don't stop petting me, human 😽"},{"comment": "🐾 I'm not a lapcat, either 🤷‍♀️"}];
  
  return comments[Math.floor(Math.random() * comments.length)]["comment"];
}

function getRandomCatName(): string{
  const names = ["Fritzi", "Luna", "Bella", "Oliver", "Charlie", "Lucy", "Leo", "Milo", "Max", "Lily", "Simba", "Chloe", "Jack", "Nala", "Loki", "Zoe", "Oreo", "Coco", "Molly", "Jasper", "Tiger", "Daisy", "Buddy", "Lola", "Oscar", "Sophie", "Bailey", "Harley", "Mia", "Rocky", "Rosie", "Ruby", "Shadow", "Ginger", "Cooper", "Bear", "Ziggy", "Penny", "Finn", "Willow", "Smokey", "Riley", "Cleo", "Gracie", "Binx", "Minnie", "Pumpkin", "Pepper", "George", "Lulu","Kitty","Sammy","Maggie","Sadie","Toby","Lilly","Abby","Boots","Callie","Cali","Misty","Rascal","Sasha","Sheba","Sunny","Theo","Angel","Ash","Bandit","Benji","Biscuit","Blu","Blue","Bob","Chester","Cookie","Ellie","Emma","Felix","Frankie","Gizmo","Izzy","Jinx","Kiki","Leo","Lexi","Lucky","Marley","Mickey","Milo","Missy","Mittens","Mojo","Murphy","Nico","Nova","Olivia","Peanut","Pixie","Remy","Roxy","Salem","Scout","Snowy","Stella","Stormy","Sugar","Tigger","Winnie"];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomCatDescription(): string{
  const description = ["Just a cat living my best life.", "I'm not lazy, I'm energy efficient.", "Professional napper and cuddler.", "Don't judge me by my fur color.", "I do what I want, when I want.", "I'm not spoiled, I'm well loved.", "I'm here for the food and pets.", "I'm not fat, I'm fluffy.", "I'm the boss of this house.", "I'm not a regular cat, I'm a cool cat.", "I have nine lives and I'm living them all.", "I'm purrfect and I know it.", "I'm not mean, I'm honest.", "I'm a cat with attitude.", "I'm a kitty with a big personality.", "I'm cute and I know how to use it.", "I'm a master of disguise and mischief.", "I'm a cat-astrophe waiting to happen.", "I'm a cat-ch me if you can.", "I'm a cat who loves adventure.", "I'm a cat who doesn't need anyone.", "I'm a cat who knows how to have fun.", "I'm a cat who likes to explore.", "I'm a cat who loves to learn new things.", "I'm a cat who appreciates the finer things in life.", "I'm a cat who is always curious.", "I'm a cat who is loyal to my friends.", "I'm a cat who is independent and strong.", "I'm a cat who is smart and witty.", "I'm a cat who is elegant and graceful.","I'm a cat who is fierce and fearless.","I'm a cat who is sweet and gentle.","I'm a cat who is playful and silly.","I'm a cat who is calm and zen.","I'm a cat who is creative and artistic.","I'm a cat who is friendly and social.","I'm a cat who is shy and quiet.","I'm a cat who is sassy and spunky.","I'm a cat who is quirky and unique.","I'm a cat who is happy and optimistic.","I'm a cat who is grumpy and pessimistic.","I'm a cat who is classy and sophisticated.","I'm a cat who is wild and free.","I'm a cat who is cozy and comfy.","I'm a cat who is hungry and thirsty.","I'm a cat who is sleepy and dreamy.","I'm a cat who is funny and charming.","Meow meow meow meow meow meow meow.","Catnip is my favorite thing ever.","Boxes are the best invention ever.","Laser pointers are my mortal enemies.","Dogs are overrated. Cats rule the world.","Birds are not friends. They are food.","Scratching posts are my therapy sessions.","Sunbeams are my happy place.","Hairballs are my way of expressing myself.","Litter boxes are my personal spa.","Water bowls are my swimming pools.","Toys are my treasures. Don't touch them.","Sofas are my scratching pads. Deal with it.","Plants are my snacks. Yum yum yum.","Windows are my TV. So much drama.","Keyboards are my beds. So comfy comfy.","Books are my pillows. So soft soft.","Shoes are my hiding spots. So sneaky sneaky.","Clothes are my blankets. So warm warm.","Bags are my forts. So cozy cozy."];
  return description[Math.floor(Math.random() * description.length)];
}

