export class ImageLoader {
    /***
     * @param {string} src Source of the image
     * @param {function} callback Called after the image is loaded
     */
    loadImage(src, callback) {
        return new Promise(
            (resolve, reject) => {
                let image = new Image()
                image.src = src
                image.onload = () => {
                    resolve(image)
                    callback()
                }
                image.onerror = () => {
                    reject(Error(`Error while loading ${src}`))
                }
            }
        )
    }
}

export default new ImageLoader()