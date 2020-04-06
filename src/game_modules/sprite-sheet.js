import * as PIXI from 'pixi.js'

export class SpriteSheet {
    constructor(texture, singleSpriteWidth = 32, singleSpriteHeight = 32) {
        this.baseTexture = texture.baseTexture
        this.singleSpriteWidth = singleSpriteWidth
        this.singleSpriteHeight = singleSpriteHeight
        this.spriteSheet = {}
    }

    createSpriteSheet(spriteSheet) {
        Object.keys(spriteSheet).forEach(name => {
            this.spriteSheet[name] = spriteSheet[name].map(spritePosition => {
                const { singleSpriteWidth, singleSpriteHeight } = this
                const { xNumber, yNumber } = spritePosition
                const xCoord = xNumber * singleSpriteWidth
                const yCoord = yNumber * singleSpriteHeight

                return new PIXI.Texture(this.baseTexture, new PIXI.Rectangle(xCoord, yCoord, singleSpriteWidth, singleSpriteHeight))
            })
        })
    }
}