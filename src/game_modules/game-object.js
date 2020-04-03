import * as PIXI from 'pixi.js'

export class GameObject {
  constructor(spritePath, x, y, anchor = 0.5) {
    this.spritePath = spritePath
    this.texture = null
    this.sprite = null
    this.x = x
    this.y = y
    this.anchor = anchor
  }

  create(texture) {
    this.texture = texture
    this.sprite = new PIXI.Sprite.from(texture)
    this.sprite.x = this.x
    this.sprite.y = this.y
    this.sprite.anchor.set(this.anchor)
  }
}