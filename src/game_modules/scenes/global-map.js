import { Scene } from 'game_modules/scene'
import { SpriteSheet } from 'game_modules/sprites/sprite-sheet'

export class GlobalMap extends Scene {
    constructor(game) {
        super(game)
    }

    init() {
        super.init()
        let image = new Image()
        image.src = '/assets/32student.png'
        image.onload = () => {
            // const spriteSheet = new SpriteSheet({
            //     spriteSheet,
            //     spriteSheetWidth: 96,
            //     spriteSheetHeight: 128,
            //     singleSpriteWidth: 32,
            //     singleSpriteHeight: 32
            // })
            // const student = spriteSheet.getSprite(1)
            // this.screen.drawSprite(sprite)
            // this.screen.drawImage(image, 0, 0)
        }
    }
}