import * as PIXI from 'pixi.js'
import { SpriteSheet } from 'game_modules/sprite-sheet'

export class GameObject {
  constructor(spritePath, initialX, initialY, initialAnchor = 0.5) {
    this.spritePath = spritePath
    this.texture = null
    this.sprite = null
    this.initialX = initialX
    this.initialY = initialY
    this.initialAnchor = initialAnchor
    this.animated = false
  }

  create(texture) {
    this.texture = texture
    this.sprite = new PIXI.Sprite.from(texture)
    this.sprite.x = this.initialX
    this.sprite.y = this.initialY
    this.sprite.anchor.set(this.initialAnchor)
  }

  createAnimated(texture) {
    this.animated = true
    const baseTexture = texture.baseTexture
    const spriteSheet = new SpriteSheet(baseTexture, {
      'up_waiting': [
        {
          row: 1,
          cols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
          row: 6,
          cols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
      ]
    }, 128, 128)
    this.texture = texture
    this.sprite = new PIXI.AnimatedSprite(spriteSheet.stateList['up_waiting'])
    this.sprite.animationSpeed = 0.5
    this.sprite.loop = true
    this.sprite.x = this.initialX
    this.sprite.y = this.initialY
    this.sprite.anchor.set(this.initialAnchor)
    this.sprite.play()
  }
}