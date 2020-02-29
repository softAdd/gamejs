import { Scene } from 'game_modules/scene'

export class Loading extends Scene {
    constructor(game) {
        super(game)
    }

    init() {
        super.init()
        let image = new Image()
        image.src = '/assets/barrel32x32transparent.png'
        image.onload = () => this.game.screen.drawImage(image, 0, 0)
    }
}