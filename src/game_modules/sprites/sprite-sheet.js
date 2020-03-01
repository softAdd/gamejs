import { Sprite } from './sprite'

export class SpriteSheet {
    constructor({
        image,
        imageWidth,
        imageHeight,
        spriteWidth,
        spriteHeight
    }) {
        this.image = image
        this.imageWidth = imageWidth
        this.imageHeight = imageHeight
        this.spriteWidth = spriteWidth
        this.spriteHeight = spriteHeight
    }

    getSpriteX(index) {
        const spriteCountInWidth = this.imageWidth / this.spriteWidth
        const spriteNumberInLine = index % spriteCountInWidth
        const spriteX = spriteNumberInLine * this.spriteWidth

        return spriteX
    }

    getSpriteY(index) {
        const spriteCountInWidth = this.imageWidth / this.spriteWidth
        const spriteY = Math.trunc(index / spriteCountInWidth) * this.spriteHeight

        return spriteY
    }

    getSprite(index, canvasSpriteX = 0, canvasSpriteY = 0, widthScale = 1, heightScale = 1) {
        return new Sprite({
            image: this.image,
            imageSpriteX: this.getSpriteX(index),
            imageSpriteY: this.getSpriteY(index),
            spriteWidth: this.spriteWidth,
            spriteHeight: this.spriteHeight,
            canvasSpriteX,
            canvasSpriteY,
            canvasImageWidth: this.spriteWidth * widthScale,
            canvasImageHeight: this.spriteHeight * heightScale
        })
    }
}