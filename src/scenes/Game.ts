import { Keys } from '~/consts/index'

export default class Game extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  constructor() {
    super(Keys.GameScene)
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
