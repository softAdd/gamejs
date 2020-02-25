import { ImageLoader } from 'game_modules/image_loader'

export class Loading {
    constructor() {
        this.images = {}
        this.isImagesLoaded = false
    }

    render() {
        this.game.display.fill('#000')
    }

    loadImages(imageFiles) {
        const imageLoader = new ImageLoader(imageFiles)
        imageLoader.load().then(names => {
            this.images = Object.assign(this.images, imageLoader.images)
            console.log(names)
        })
    }
}