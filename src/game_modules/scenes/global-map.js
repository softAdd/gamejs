import { Scene } from 'game_modules/scene'
import { loadImage } from 'game_modules/loaders'

export class GlobalMap extends Scene {
    constructor(game) {
        super(game)
    }

    init() {
        super.init()
        this.setImages()
    }

    async setImages() {
        const image = await loadImage('/assets/32student.png')
        this.screen.drawImage(image, 0, 0)
    }
}