import * as PIXI from 'pixi.js'

// https://jsfiddle.net/0o2nsc18/
// http://jsfiddle.net/gfcarv/QKgHs/
export class Camera {
    constructor(app, currentScreen) {
        this.app = app
        this.currentScreen = currentScreen
        this.followed = null

        window.addEventListener('click', () => {
            console.log(this)
            const xView = this.app.stage.x + 5
            const yView = this.app.stage.y + 5
            this.updateCameraPosition(xView, yView)
        })
    }

    updateCameraPosition(xView, yView) {
        this.app.stage.x = xView
        this.app.stage.y = yView
    }

    setFollowing(sprite) {
        this.followed = sprite
    }

    setStatic() {
        this.followed = null
    }
}