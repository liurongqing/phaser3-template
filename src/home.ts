import * as scenes from '@/scenes'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const config: any = {
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'app',
    width: 800,
    height: 600
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  // audio: {
  //   noAudio: true
  // },
  // banner: {
  //   hidePhaser: true
  // },
  scene
}

window.game = new Phaser.Game(config)
