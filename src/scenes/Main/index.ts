import { BASE_URL, PATH_URL } from '@/const'
export default class Main extends Phaser.Scene {
  constructor() {
    super('mainScene')
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL)
    this.load.image('bg', 'images/bg.jpg')
  }

  create() {
    this.add.image(0, 0, 'bg').setOrigin(0, 0)
  }
}
