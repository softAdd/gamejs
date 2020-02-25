import { Screen } from 'game_modules/screen'

export class Game {
    constructor(rootElement, canvasClassName, width = 640, height = 640) {
        this.screen = new Screen(rootElement, canvasClassName, width, height)
    }

    frame(timestamp) {
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }

    run() {
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }
}