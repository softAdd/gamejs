export class Scene {
    constructor(game) {
        this.game = game
        this.isActive = false
    }

    init() {
        this.isActive = true
    }

    render(time) {
        console.log(time)
    }
}