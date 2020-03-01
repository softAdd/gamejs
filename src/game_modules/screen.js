export class Screen {
    constructor(rootElement, canvasClassName, width, height) {
        this.width = width
        this.height = height
        this.canvas = this.createCanvas(rootElement, canvasClassName, width, height)
        this.context = this.canvas.getContext('2d')
    }

    createCanvas(rootElement, canvasClassName, width, height) {
        const canvas = document.createElement('canvas')
        canvas.className = canvasClassName
        canvas.width = width
        canvas.height = height
        rootElement.appendChild(canvas)

        return canvas
    }

    drawImage(image, x, y) {
        this.context.drawImage(image, x, y)
    }

    drawSprite({
        image,
        imageSpriteX,
        imageSpriteY,
        spriteWidth,
        spriteHeight,
        canvasSpriteX,
        canvasSpriteY,
        canvasImageWidth,
        canvasImageHeight
    }) {
        this.context.drawImage(
            image,
            imageSpriteX,
            imageSpriteY,
            spriteWidth,
            spriteHeight,
            canvasSpriteX,
            canvasSpriteY,
            canvasImageWidth,
            canvasImageHeight
        )
    }
}