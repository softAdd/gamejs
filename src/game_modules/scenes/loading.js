import { Scene } from 'game_modules/scene'

export class Loading extends Scene {
    constructor(game) {
        super(game)
        this.nextScene = 'menu'
    }

    render(time) {
        this.game.display.fill('#000')
        super.render(time)
    }
}