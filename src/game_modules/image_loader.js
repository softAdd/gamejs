export class ImageLoader {
    loadImage(name, src) {
        return new Promise(resolve => {
            let image = new Image()
            image.src = src
            image.onload = () => resolve({
                [name]: image
            })
        })
    }

    loadImages(imageFiles) {
        let imagePromises = {}

        imageFiles.forEach(({ name, src }) => new Promise(
            resolve => {
                let image = new Image()
                image.src = src
                imagePromises[name] = image
                image.onload = () => resolve(name)
            }
        ))
        return imagePromises
    }
}

export default new ImageLoader()