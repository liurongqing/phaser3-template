import { SceneKeys } from '~/consts/index'

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.PRELOAD)
  }
  preload() {
    this.load.image('bg', 'assets/images/bg.jpg')
  }
  create() {
    this.scene.start(SceneKeys.GAME)
  }
  update() { }
}
