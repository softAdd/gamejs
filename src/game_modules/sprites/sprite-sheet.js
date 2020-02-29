import { Sprite } from './sprite'

export class SpriteSheet {
    constructor({
        spriteSheet,
        spriteSheetWidth,
        spriteSheetHeight,
        singleSpriteWidth = 64,
        singleSpriteHeight = 64
    }) {
        this.spriteSheet = spriteSheet
        this.spriteSheetWidth = spriteSheetWidth
        this.spriteSheetHeight = spriteSheetHeight
        this.singleSpriteWidth = singleSpriteWidth
        this.singleSpriteHeight = singleSpriteHeight
    }

    getSpritePositionX(index) {
        if (index === 0) {
            return 0
        }
        const widthSpriteCount = this.spriteSheetWidth / this.spriteSheetHeight
        const sourceX = (index - 1) % widthSpriteCount * this.singleSpriteWidth
        
        return sourceX
    }

    getSpritePositionY(index) {
        if (index === 0) {
            return 0
        }
        const heightSpriteCount = this.spriteSheetHeight / this.singleSpriteHeight
        const sourceY = (index - 1) % heightSpriteCount * this.singleSpriteHeight

        return sourceY
    }

    getSprite(index) {
        return new Sprite({
            image: this.spriteSheet,
            sourceX: this.getSpritePositionX(index),
            sourceY: this.getSpritePositionY(index),
            width: this.singleSpriteWidth,
            height: this.singleSpriteHeight
        })
    }
}