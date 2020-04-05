import * as PIXI from 'pixi.js'

export class GameObject {
  constructor(spritePath, initialX, initialY, initialAnchor = 0.5) {
    this.spritePath = spritePath
    this.texture = null
    this.sprite = null
    this.initialX = initialX
    this.initialY = initialY
    this.initialAnchor = initialAnchor
  }

  create(texture) {
    this.texture = texture
    this.sprite = new PIXI.Sprite.from(texture)
    this.sprite.x = this.initialX
    this.sprite.y = this.initialY
    this.sprite.anchor.set(this.initialAnchor)
  }
}