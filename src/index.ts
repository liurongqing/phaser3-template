import { OPTION_GAME } from '@/const'
import * as scenes from '@/scenes'
import { os } from '@/utils'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const scale: any = {
  parent: OPTION_GAME.parent,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  mode: OPTION_GAME.mode,
  width: OPTION_GAME.width,
  height: OPTION_GAME.height
}

if (os.isPc) {
  scale.max = {
    width: 375,
    height: 667
  }
}
const config: any = {
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scale,
  scene
}

window.game = new Phaser.Game(config)
