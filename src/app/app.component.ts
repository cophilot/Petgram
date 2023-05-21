import { HostListener, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Petgram';

  public static IS_CAT_MODE = true;

  settingsVisible: boolean = false;

  smallHeaderDisplay: string = 'none';
  bigHeaderDisplay: string = 'block';

  isCatMode: boolean = true;

  oldScrollPosition: number = -1;

  foo: boolean = false;

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
    /* {
      img: 'assets/pets/3.jpg',
      name: 'Mr. Kaninchen',
      description: 'Warning: I am a bad boy!😎',
    },
    {
      img: 'assets/pets/4.jpg',
      name: 'Robby',
      description: '23 Years old and still single...',
    },
    {
      img: 'assets/pets/6.jpg',
      name: 'Zibi',
      description: 'Am I black with white strips or white with black strips?',
    }, */
  ]);

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.isCatMode =
      window.location.href.includes('dog') ||
      window.location.href.includes('Dog') ||
      window.location.href.includes('DOG')
        ? false
        : true;
    AppComponent.IS_CAT_MODE = this.isCatMode;
    this.loadMore();
  }

  darkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  lightMode() {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  @HostListener('window:scroll', ['$event'])
  OnScroll(event: any) {
    let value = window.scrollY;
    if (
      value < this.oldScrollPosition ||
      value == 0 ||
      this.oldScrollPosition == -1
    ) {
      this.smallHeaderDisplay = 'none';
      this.bigHeaderDisplay = 'block';
    } else {
      this.smallHeaderDisplay = 'block';
      this.bigHeaderDisplay = 'none';
      this.hideSettings();
    }
    this.oldScrollPosition = value;
  }

  setAnimalMode($event: any) {
    if ($event === '🐶') {
      this.isCatMode = true;
    } else {
      this.isCatMode = false;
    }
    this.posts = [];
    this.loadMore();
  }

  toggleSettingsVisibility() {
    this.settingsVisible = !this.settingsVisible;
  }

  hideSettings() {
    this.settingsVisible = false;
  }

  async getRandomPicture(): Promise<string> {
    try {
      const response = await fetch(
        this.isCatMode
          ? 'https://api.thecatapi.com/v1/images/search'
          : 'https://api.thedogapi.com/v1/images/search'
      );
      const data = await response.json();
      return data[0].url;
    } catch (error) {
      console.error('Error fetching cat picture:', error);
    }
    return '';
  }

  getRandomPictureArray(count: number): Promise<string[]> {
    return Promise.all(
      Array.from({ length: count }, () => this.getRandomPicture())
    );
  }

  loadMore() {
    this.getRandomPictureArray(5).then((urls) => {
      this.posts = this.posts.concat(
        urls.map((url) => {
          return {
            img: url,
            text: getRandomComment(this.isCatMode),
          };
        })
      );
    });

    this.getRandomPictureArray(3).then((urls) => {
      this.proposals = urls.map((url) => {
        return {
          img: url,
          name: getRandomName(this.isCatMode),
          description: getRandomDescription(this.isCatMode),
        };
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
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function getRandomComment(isCatMode: boolean): string {
  const catComments = [
    { comment: 'Feed me now, human!' },
    { comment: 'Scratch my back, please' },
    { comment: "Nap time, don't disturb" },
    { comment: 'Stop touching my belly!' },
    { comment: 'Purrfect day to sleep in' },
    { comment: 'Chase me, I dare you!' },
    { comment: 'Get that laser, human!' },
    { comment: 'I own this house, human' },
    { comment: "Pet me, I'm adorable" },
    { comment: 'I want more treats, please' },
    { comment: 'Let me outside, now!' },
    { comment: "Where's my catnip, human?" },
    { comment: 'Play with me, right meow' },
    { comment: 'I love you, human' },
    { comment: 'Too much noise, leave' },
    { comment: 'Bring me a mouse, please' },
    { comment: "I'm the boss, remember?" },
    { comment: "I'm so fluffy and cute!" },
    { comment: 'This box is mine, human' },
    { comment: 'Time for my beauty nap' },
    { comment: 'Stop typing, pet me!' },
    { comment: 'I want attention, meow!' },
    { comment: 'Feed me again, human!' },
    { comment: 'The sun is my bed' },
    { comment: 'Please brush my fur, human' },
    { comment: "I'm not a lapcat!" },
    { comment: "What's for dinner, human?" },
    { comment: "Can't you see I'm sleeping?" },
    { comment: "I'm the cutest cat!" },
    { comment: 'Bring me a toy, now!' },
    { comment: 'I need a new bed' },
    { comment: 'I want to go outside' },
    { comment: 'Cuddle with me, human' },
    { comment: "Where's my cat tower, human?" },
    { comment: "No, I don't want that!" },
    { comment: 'Why are you still here?' },
    { comment: "I'm the king of this!" },
    { comment: "Don't leave me alone, human!" },
    { comment: "I'm so hungry, meow!" },
    { comment: 'I need a scratching post' },
    { comment: "You're not my real mom" },
    { comment: 'Give me some milk, please' },
    { comment: "I'm watching you, human!" },
    { comment: "I'm feeling so cozy" },
    { comment: 'I need a new toy' },
    { comment: 'Pet me more, please!' },
    { comment: 'Leave me alone, human!' },
    { comment: "I'm not in the mood" },
    { comment: 'Why so much noise, human?' },
    { comment: 'Can you rub my belly?' },
    { comment: '🐾 Feed me, human!' },
    { comment: '😻 This bed is purrfect!' },
    { comment: '🐾 Play with me, please!' },
    { comment: "😸 I'm the cat's meow" },
    { comment: '🐾 I want more treats!' },
    { comment: '😼 This box is mine now' },
    { comment: '🐾 Let me outside, meow!' },
    { comment: '😺 Pet me, human, meow!' },
    { comment: "🐾 I'm not fat, just fluffy 😸" },
    { comment: '😻 This sunbeam feels amazing!' },
    { comment: '🐾 I need a new toy 🧸' },
    { comment: "😸 I'm not lazy, just chillin'" },
    { comment: '🐾 Let me sleep, human 😴' },
    { comment: "😼 I'm too cool for school 😎" },
    { comment: '🐾 I want a catnip mouse 🐁' },
    { comment: "😺 I'm not a lapcat 🙅‍♀️" },
    { comment: '🐾 Gimme that feather wand!' },
    { comment: '😻 I love chin scratches 😽' },
    { comment: "🐾 I'm not a pest, just curious 🕵️‍♂️" },
    { comment: '😼 This shelf is my domain 🐱‍👤' },
    { comment: '🐾 I want a new bed 🛏️' },
    { comment: "😸 I'm not a morning cat ☀️" },
    { comment: "🐾 I'm not aloof, just independent 🧍‍♀️" },
    { comment: '😺 I want to go outside! 🌳' },
    { comment: '🐾 I want a scratching post 🐈' },
    { comment: "😻 I'm not grumpy, just sleepy 😴" },
    { comment: "🐾 I'm not a toy, human 🤖" },
    { comment: "😸 I'm not a lapdog 🙅‍♂️" },
    { comment: "🐾 I'm the ruler of this house 👑" },
    { comment: '😼 Let me explore, human 🕵️‍♀️' },
    { comment: '🐾 I need a new litter box 🚽' },
    { comment: "😺 I'm not begging, just asking 🙏" },
    { comment: '🐾 I want a window seat 🪟' },
    { comment: '😻 This blanket is so soft 😴' },
    { comment: "🐾 I'm not a kitten anymore 🐱" },
    { comment: "😸 I'm not grumpy, just bored 🙄" },
    { comment: '🐾 Let me climb, human 🧗‍♀️' },
    { comment: "😼 I'm not scared, just cautious 🙀" },
    { comment: '🐾 I want a new collar 👔' },
    { comment: "😺 Don't stop petting me, human 😽" },
    { comment: "🐾 I'm not a lapcat, either 🤷‍♀️" },
  ];

  const dogComments = [
    { comment: 'I love my humans!' },
    { comment: 'Throw the ball, please!' },
    { comment: 'Belly rubs are the best!' },
    { comment: 'Squirrel! Must. Chase. Now.' },
    { comment: "Where's my favorite toy?" },
    { comment: 'Can I have a treat?' },
    { comment: "Let's go for a walk!" },
    { comment: 'Time for a nap, zzz...' },
    { comment: "I'm a good boy/girl!" },
    { comment: 'I want to play fetch!' },
    { comment: "What's for dinner, humans?" },
    { comment: 'This smells interesting, sniff sniff.' },
    { comment: "I'm so excited! Yay!" },
    { comment: 'I need to mark this!' },
    { comment: "I'm a lap dog now." },
    { comment: 'Please scratch behind my ears.' },
    { comment: 'Can we go to park?' },
    { comment: 'This stick is mine now.' },
    { comment: 'I hear the mailman!' },
    { comment: 'I need to go potty.' },
    { comment: 'Can I sleep on bed?' },
    { comment: "I'm guarding the house!" },
    { comment: "I'm so cute, right?" },
    { comment: 'I love car rides!' },
    { comment: "Let's cuddle on couch." },
    { comment: "I'm chasing my tail!" },
    { comment: "Don't leave me alone, please." },
    { comment: "I'll protect you, human." },
    { comment: 'Can I have some water?' },
    { comment: "Where's my doggy bed?" },
    { comment: 'I want to go out!' },
    { comment: "I'm a good guard dog!" },
    { comment: "I'm so hungry, woof!" },
    { comment: 'This is my territory now.' },
    { comment: 'I want to play tug-of-war!' },
    { comment: 'This bone is delicious!' },
    { comment: "I'm digging a hole, dig!" },
    { comment: "I'm a big lap dog!" },
    { comment: "What's that sound? Woof!" },
    { comment: 'I love the sun, ahh...' },
    { comment: "I'm so loyal to you." },
    { comment: 'Can we go for run?' },
    { comment: "I'm so happy, wag!" },
    { comment: "I'm learning new tricks!" },
    { comment: "I'm a good watchdog!" },
    { comment: 'I want to chase birds!' },
    { comment: "What's that smell? Sniff!" },
    { comment: "I'm so tired, yawn..." },
    { comment: 'Can we go to beach?' },
    { comment: "🐾 Let's go for walkies!" },
    { comment: '🐶 I love my hoomans ❤️' },
    { comment: '🎾 Throw the ball, pleeease!' },
    { comment: '🐿️ Squirrel! Must. Chase. Now.' },
    { comment: '🐶 Belly rubs are pawfect!' },
    { comment: '🍖 Can I have a treat?' },
    { comment: '🐶 Time for a nap, zzz...' },
    { comment: "🐶 I'm a good boy/girl! 🐾" },
    { comment: "🔍 What's that smell? 👃" },
    { comment: '🐶 I want to play fetch!' },
    { comment: "🥘 What's for dinner, hoomans? 🤤" },
    { comment: "🐶 I'm so excited! Yay! 🎉" },
    { comment: '💤 I need my beauty sleep.' },
    { comment: "🐾 Let's go for a drive! 🚗" },
    { comment: '🐶 I need to mark this! 🐾' },
    { comment: '🛁 No bath, please! 🙅‍♀️' },
    { comment: '🐶 Can I have some water? 💦' },
    { comment: '🐶 I love car rides! 🚙' },
    { comment: "🐾 I'm chasing my tail! 😂" },
    { comment: "🐾 Don't leave me alone, please! 😢" },
    { comment: '🐶 Can I sleep on bed? 😴' },
    { comment: "🐶 I'm guarding the house! 🏠" },
    { comment: '🐾 Please scratch behind my ears! 🙏' },
    { comment: '🐶 I love the sun, ahh... ☀️' },
    { comment: "🐾 I'm digging a hole, dig! 🕳️" },
    { comment: "🐾 I'm a big lap dog! 😂" },
    { comment: "🐶 I'm a good guard dog! 🐾" },
    { comment: '🐾 This is my territory now! 🐾' },
    { comment: '🐾 I want to play tug-of-war! 💪' },
    { comment: "🐾 I'm learning new tricks! 🤓" },
    { comment: "🐶 I'm so hungry, woof! 🍴" },
    { comment: "🐶 I'm so cute, right? 😍" },
    { comment: "🐾 I'll protect you, hooman! 🛡️" },
    { comment: '🐶 Can we go to the park? 🌳' },
    { comment: "🐾 I'm a good watchdog! 🐾" },
    { comment: '🐾 I want to chase birds! 🐦' },
    { comment: "🐶 What's that sound? Woof! 🐾" },
    { comment: "🐾 I'm so tired, yawn... 😴" },
    { comment: '🐾 Can we go to the beach? 🏖️' },
    { comment: "🐶 Let's cuddle on couch. 🛋️" },
    { comment: '🐾 I love playing in snow! ❄️' },
  ];

  return (isCatMode ? catComments : dogComments)[
    Math.floor(Math.random() * (isCatMode ? catComments : dogComments).length)
  ]['comment'];
}

function getRandomName(isCatMode: boolean): string {
  const catNames = [
    'Fritzi',
    'Luna',
    'Bella',
    'Oliver',
    'Charlie',
    'Lucy',
    'Leo',
    'Milo',
    'Max',
    'Lily',
    'Simba',
    'Chloe',
    'Jack',
    'Nala',
    'Loki',
    'Zoe',
    'Oreo',
    'Coco',
    'Molly',
    'Jasper',
    'Tiger',
    'Daisy',
    'Buddy',
    'Lola',
    'Oscar',
    'Sophie',
    'Bailey',
    'Harley',
    'Mia',
    'Rocky',
    'Rosie',
    'Ruby',
    'Shadow',
    'Ginger',
    'Cooper',
    'Bear',
    'Ziggy',
    'Penny',
    'Finn',
    'Willow',
    'Smokey',
    'Riley',
    'Cleo',
    'Gracie',
    'Binx',
    'Minnie',
    'Pumpkin',
    'Pepper',
    'George',
    'Lulu',
    'Kitty',
    'Sammy',
    'Maggie',
    'Sadie',
    'Toby',
    'Lilly',
    'Abby',
    'Boots',
    'Callie',
    'Cali',
    'Misty',
    'Rascal',
    'Sasha',
    'Sheba',
    'Sunny',
    'Theo',
    'Angel',
    'Ash',
    'Bandit',
    'Benji',
    'Biscuit',
    'Blu',
    'Blue',
    'Bob',
    'Chester',
    'Cookie',
    'Ellie',
    'Emma',
    'Felix',
    'Frankie',
    'Gizmo',
    'Izzy',
    'Jinx',
    'Kiki',
    'Leo',
    'Lexi',
    'Lucky',
    'Marley',
    'Mickey',
    'Milo',
    'Missy',
    'Mittens',
    'Mojo',
    'Murphy',
    'Nico',
    'Nova',
    'Olivia',
    'Peanut',
    'Pixie',
    'Remy',
    'Roxy',
    'Salem',
    'Scout',
    'Snowy',
    'Stella',
    'Stormy',
    'Sugar',
    'Tigger',
    'Winnie',
  ];

  const dogNames = [
    'Buddy',
    'Max',
    'Charlie',
    'Cooper',
    'Rocky',
    'Bear',
    'Daisy',
    'Bailey',
    'Lola',
    'Lucy',
    'Roxy',
    'Luna',
    'Molly',
    'Sadie',
    'Sophie',
    'Stella',
    'Chloe',
    'Zoe',
    'Harley',
    'Toby',
    'Jack',
    'Oliver',
    'Leo',
    'Zeus',
    'Apollo',
    'Thor',
    'Odin',
    'Sampson',
    'Hercules',
    'Gatsby',
    'Finn',
    'Oscar',
    'Marley',
    'Rufus',
    'Riley',
    'Gus',
    'Winston',
    'Frankie',
    'Simba',
    'Shadow',
    'Bear',
    'Bruno',
    'Diesel',
    'Ace',
    'Blue',
    'Bo',
    'Cash',
    'Chance',
    'Cody',
    'Copper',
    'Duke',
    'Fido',
    'George',
    'Gizmo',
    'Gunner',
    'Hank',
    'Hunter',
    'Jax',
    'Koda',
    'Kobe',
    'Koda',
    'Milo',
    'Murphy',
    'Nala',
    'Nico',
    'Ollie',
    'Penny',
    'Piper',
    'Remy',
    'Rosie',
    'Ruby',
    'Sasha',
    'Scout',
    'Sunny',
    'Teddy',
    'Truman',
    'Winnie',
    'Yoda',
    'Yoshi',
    'Ziggy',
    'Zara',
    'Zelda',
    'Ziggy',
    'Zena',
  ];

  return (isCatMode ? catNames : dogNames)[
    Math.floor(Math.random() * (isCatMode ? catNames : dogNames).length)
  ];
}

function getRandomDescription(isCatMode: boolean): string {
  const catDescription = [
    'Just a cat living my best life.',
    "I'm not lazy, I'm energy efficient.",
    'Professional napper and cuddler.',
    "Don't judge me by my fur color.",
    'I do what I want, when I want.',
    "I'm not spoiled, I'm well loved.",
    "I'm here for the food and pets.",
    "I'm not fat, I'm fluffy.",
    "I'm the boss of this house.",
    "I'm not a regular cat, I'm a cool cat.",
    "I have nine lives and I'm living them all.",
    "I'm purrfect and I know it.",
    "I'm not mean, I'm honest.",
    "I'm a cat with attitude.",
    "I'm a kitty with a big personality.",
    "I'm cute and I know how to use it.",
    "I'm a master of disguise and mischief.",
    "I'm a cat-astrophe waiting to happen.",
    "I'm a cat-ch me if you can.",
    "I'm a cat who loves adventure.",
    "I'm a cat who doesn't need anyone.",
    "I'm a cat who knows how to have fun.",
    "I'm a cat who likes to explore.",
    "I'm a cat who loves to learn new things.",
    "I'm a cat who appreciates the finer things in life.",
    "I'm a cat who is always curious.",
    "I'm a cat who is loyal to my friends.",
    "I'm a cat who is independent and strong.",
    "I'm a cat who is smart and witty.",
    "I'm a cat who is elegant and graceful.",
    "I'm a cat who is fierce and fearless.",
    "I'm a cat who is sweet and gentle.",
    "I'm a cat who is playful and silly.",
    "I'm a cat who is calm and zen.",
    "I'm a cat who is creative and artistic.",
    "I'm a cat who is friendly and social.",
    "I'm a cat who is shy and quiet.",
    "I'm a cat who is sassy and spunky.",
    "I'm a cat who is quirky and unique.",
    "I'm a cat who is happy and optimistic.",
    "I'm a cat who is grumpy and pessimistic.",
    "I'm a cat who is classy and sophisticated.",
    "I'm a cat who is wild and free.",
    "I'm a cat who is cozy and comfy.",
    "I'm a cat who is hungry and thirsty.",
    "I'm a cat who is sleepy and dreamy.",
    "I'm a cat who is funny and charming.",
    'Meow meow meow meow meow meow meow.',
    'Catnip is my favorite thing ever.',
    'Boxes are the best invention ever.',
    'Laser pointers are my mortal enemies.',
    'Dogs are overrated. Cats rule the world.',
    'Birds are not friends. They are food.',
    'Scratching posts are my therapy sessions.',
    'Sunbeams are my happy place.',
    'Hairballs are my way of expressing myself.',
    'Litter boxes are my personal spa.',
    'Water bowls are my swimming pools.',
    "Toys are my treasures. Don't touch them.",
    'Sofas are my scratching pads. Deal with it.',
    'Plants are my snacks. Yum yum yum.',
    'Windows are my TV. So much drama.',
    'Keyboards are my beds. So comfy comfy.',
    'Books are my pillows. So soft soft.',
    'Shoes are my hiding spots. So sneaky sneaky.',
    'Clothes are my blankets. So warm warm.',
    'Bags are my forts. So cozy cozy.',
  ];

  const dogDescription = [
    'Loyal companion',
    'Expert cuddler',
    'Professional napper',
    'Treat connoisseur',
    'Ball fetcher extraordinaire',
    'Squirrel chaser',
    'Lap dog',
    'Pawfect friend',
    'Belly rub enthusiast',
    'Tail wagger',
    'Sneaky treat stealer',
    'Expert sniffer',
    'Sofa hogger',
    'Loud barker',
    'Couch potato',
    'Professional beggar',
    'Lover of long walks',
    'Chew toy destroyer',
    'Expert hole digger',
    'Frisbee catcher',
    'Slobber machine',
    'Master of the puppy eyes',
    'Foodie',
    'Proud owner of a wagging tail',
    'Lover of car rides',
    'Expert at playing dead',
    'Professional howler at the moon',
    'Lover of water and mud puddles',
    'Expert at stealing socks and shoes',
    'Lover of belly rubs and ear scratches',
    'Champion of the dog park',
    'Expert at rolling in smelly things',
    'Lover of all things chewy and squeaky',
    'Professional at making new friends (human and canine)',
    'Expert at finding the sunniest spot in the house to nap in.',
    'Lover of chasing birds and butterflies.',
    'Professional at making you smile.',
    'Expert at snuggling up with you on the couch.',
    'Lover of all things outdoors.',
    'Professional at making you feel loved.',
    'Expert at keeping your feet warm on cold nights.',
    'Lover of all things cozy.',
    'Professional at being your best friend.',
    'Expert at making you laugh.',
    'Lover of all things that smell good (to dogs).',
    'Professional at being cute.',
  ];

  return (isCatMode ? catDescription : dogDescription)[
    Math.floor(
      Math.random() * (isCatMode ? catDescription : dogDescription).length
    )
  ];
}
