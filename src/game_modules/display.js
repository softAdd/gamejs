export class Display {
    constructor(rootElement, canvasClassName, width, height) {
        this.width = width
        this.height = height
        this.canvas = this.createCanvas(rootElement, canvasClassName, width, height)
        this.context = this.canvas.getContext('2d')
        this.images = {}
        this.isImagesLoaded = false
    }

    createCanvas(rootElement, canvasClassName, width, height) {
        const canvas = document.createElement('canvas')
        canvas.className = canvasClassName
        canvas.width = width
        canvas.height = height
        rootElement.appendChild(canvas)

        return canvas
    }

    fill(color) {
        this.context.fillStyle = color
        this.context.fillRect(0, 0, this.width, this.height)
    }
}