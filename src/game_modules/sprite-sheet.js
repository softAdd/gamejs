import * as PIXI from 'pixi.js'

export class SpriteSheet {
    constructor(baseTexture, spriteSheet, singleSpriteWidth = 32, singleSpriteHeight = 32) {
        this.baseTexture = baseTexture
        this.singleSpriteWidth = singleSpriteWidth
        this.singleSpriteHeight = singleSpriteHeight
        this.stateList = {}

        Object.keys(spriteSheet).forEach(name => {

            spriteSheet[name].forEach(({ row, cols }) => {
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
        console.log(this)
    }
}