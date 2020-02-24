import { Display } from 'game_modules/display'

export class Game {
    constructor(rootElement, canvasClassName, width = 640, height = 640) {
        this.display = new Display(rootElement, canvasClassName, width, height)
    }

    frame(timestamp) {
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }

    run() {
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }
}