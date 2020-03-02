export class Scene {
    constructor(game) {
        this.game = game
        this.screen = this.game.screen
        this.status = this.constructor.LOADING
    }
    
    init() {
        this.status = this.constructor.WORKING
    }
    /* scene statuses */
    static get LOADING() { return 'LOADING' }
    static get WORKING() { return 'WORKING' }

    close(status) {
        this.status = status
    }
}