import { Display } from 'game_modules/display'
import { Loading } from 'game_modules/scenes/loading'

export class Game {
    constructor(rootElement, canvasClassName) {
        this.display = new Display(480, 480, rootElement, canvasClassName)
        this.scenes = {
            loading: new Loading(this)
        }
        this.currentScene = this.scenes.loading
        this.currentScene.init()
    }

    frame(timestamp) {
        if (this.currentScene.isActive === false) {
            this.currentScene = this.scenes[this.currentScene.nextScene]
            this.currentScene.init()
        }
        this.currentScene.render(timestamp)
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }

    run() {
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }
}