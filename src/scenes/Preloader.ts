import { Keys } from "~/consts/index";

export default class Preloader extends Phaser.Scene {
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  constructor() {
    super(Keys.PreloadScene)
  }
  preload() {
    this.load.image('bg', 'assets/images/bg.jpg')
  }
  create() {
    this.scene.start(Keys.GameScene)
  }
  update() { }
}
