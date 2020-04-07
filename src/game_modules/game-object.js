import * as PIXI from 'pixi.js'

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

  createAnimated(texture, defaultSprite) {
    this.animated = true
    this.texture = texture
    this.sprite = new PIXI.AnimatedSprite(defaultSprite)
    this.sprite.animationSpeed = 0.5
    this.sprite.loop = false
    this.sprite.x = this.initialX
    this.sprite.y = this.initialY
    this.sprite.anchor.set(this.initialAnchor)
  }
}