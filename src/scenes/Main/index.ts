import { BASE_URL, PATH_URL } from '@/const'
export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }

  preload() {
    this.load.setBaseURL(BASE_URL)
    this.load.setPath(PATH_URL)
    this.load.image('bg', 'bg.jpg')
  }

  create() {
    this.add.image(0, 0, 'bg').setOrigin(0, 0)
  }
}
