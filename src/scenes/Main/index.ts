import { BASE_URL, PATH_URL } from '@/const'
export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }

  preload() {
    this.load.setBaseURL('http://labs.phaser.io')
    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
    // this.load.setBaseURL(BASE_URL)
    // this.load.setPath(PATH_URL)
    // this.load.image('bg', 'images/bg.jpg')
    // console.log('git submodule test')
  }

  create() {
    this.add.image(400, 300, 'sky');
    const particles = this.add.particles('red');
    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });
    const logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
    // this.add.image(0, 0, 'bg').setOrigin(0, 0)
  }
}
