export class Sprite {
    constructor({
        image,
        imageSpriteX,
        imageSpriteY,
        spriteWidth,
        spriteHeight,
        canvasSpriteX = spriteX,
        canvasSpriteY = spriteY,
        canvasImageWidth = spriteWidth,
        canvasImageHeight = spriteHeight
    }) {
        this.image = image
        this.imageSpriteX = imageSpriteX
        this.imageSpriteY = imageSpriteY
        this.spriteWidth = spriteWidth
        this.spriteHeight = spriteHeight
        this.canvasSpriteX = canvasSpriteX
        this.canvasSpriteY = canvasSpriteY
        this.canvasImageWidth = canvasImageWidth
        this.canvasImageHeight = canvasImageHeight

    }

    moveSprite(x, y) {
        this.canvasSpriteX = x
        this.canvasSpriteY = y
    }
}