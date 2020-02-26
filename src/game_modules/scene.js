import imageLoader from 'game_modules/image_loader'

export class Scene {
    constructor(game) {
        this.game = game
        this.imageLoader = imageLoader
        this.status = this.constructor.WORKING
    }
    /* scene statuses */
    static get LOADING() { return 'LOADING' }
    static get STARTED() { return 'STARTED' }
    static get WORKING() { return 'WORKING' }
    static get COMPLETED() { return 'COMPLETED' }
    static get SUCCESSFULLY_COMPLETED() { return 'SUCCESSFULLY_COMPLETED' }
    static get FAILED() { return 'FAILED' }

    close(status) {
        this.status = status
    }
}