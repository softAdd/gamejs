import * as PIXI from 'pixi.js'

export class SpriteSheet {
  constructor(baseTexture, spriteSheet) {
    this.baseTexture = baseTexture
    this.stateList = {}

    Object.keys(spriteSheet).forEach(name => {

      spriteSheet[name].forEach(({
        row,
        cols,
        singleSpriteWidth = 32,
        singleSpriteHeight = 32
      }) => {
        cols.forEach(col => {
          const xCoord = col * singleSpriteWidth
          const yCoord = row * singleSpriteHeight

          if (!Array.isArray(this.stateList[name])) {
            this.stateList[name] = []
          }

          this.stateList[name] = [...this.stateList[name], new PIXI.Texture(this.baseTexture, new PIXI.Rectangle(xCoord, yCoord, singleSpriteWidth, singleSpriteHeight))]
        })
      })
    })
  }
}