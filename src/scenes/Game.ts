import { SceneKeys } from '~/consts/index'

export default class Game extends Phaser.Scene {
  constructor() {
    super(SceneKeys.GAME)
  }
  preload() { }
  create() {
    const { width, height } = this.scale
    this.add.image(width * 0.5, height * 0.5, 'bg')

    this.add.text(width * 0.5, height * 0.5, 'Game.ts', {
      fontSize: '38px'
    }).setOrigin(0.5)
  }
  update() { }
}
