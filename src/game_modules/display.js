export class Display {
    constructor(width, height, rootElement, canvasClassName) {
        this.width = width
        this.height = height
        this.canvas = this.createCanvas(rootElement, canvasClassName)
        this.context = this.canvas.getContext('2d')
        this.context.canvas.width = width
        this.context.canvas.height = height
    }

    createCanvas(rootElement, canvasClassName) {
        const canvas = document.createElement('canvas')
        canvas.className = canvasClassName
        rootElement.appendChild(canvas)

        return canvas
    }

    fill(color) {
        this.context.fillStyle = color
        this.context.fillRect(0, 0, this.width, this.height)
    }
}