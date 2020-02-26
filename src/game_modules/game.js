import { Screen } from 'game_modules/screen'
import { Scene } from './scene'
/* <--- scenes ---> */
import Menu from 'scenes/menu'

export class Game {
    constructor(rootElement, canvasClassName, width = 640, height = 640) {
        this.screen = new Screen(rootElement, canvasClassName, width, height)
        this.scenes = {
            loading: new Menu(this),
            menu: new Menu(this)
        }
        this.currentScene = this.scenes.loading
    }

    changeScene(status) {
        switch (status) {
            case Scene.STARTED:
                return this.scenes.menu
            default:
                return this.scenes.menu
        }
    }

    frame(timestamp) {
        if (this.currentScene.status !== Scene.WORKING) {
            this.currentScene = this.changeScene(this.currentScene.status)
        }
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }

    run() {
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }
}