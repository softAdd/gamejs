import { Screen } from './screen'
import { Scene } from './scene'
import { KeyboardState } from './keyboard-state'
/* <--- scenes ---> */
import { Loading } from 'scenes/loading'
import { Menu } from 'scenes/menu'
import { GlobalMap } from 'scenes/global-map'

export class Game {
    constructor(rootElement, canvasClassName, width = 640, height = 640) {
        this.screen = new Screen(rootElement, canvasClassName, width, height)

        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this),
            globalMap: new GlobalMap(this)
        }
        this.currentScene = this.scenes.globalMap

        this.keyboardState = new KeyboardState()
    }

    frame(timestamp) {
        if (this.currentScene.status !== Scene.WORKING) {
            this.currentScene.init()
        }
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }

    run() {
        requestAnimationFrame(timestamp => this.frame(timestamp))
    }
}