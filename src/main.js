import 'babel-polyfill'

import { Game } from 'game_modules/game'
import { SpriteSheet } from 'game_modules/sprites/sprite-sheet'

window.onload = () => {
    const rootElement = document.querySelector('#js-gamebox')
    const game = new Game(rootElement, 'gameCanvas')
    game.run()
    let image = new Image()
    image.src = '/assets/32student.png'
    image.onload = () => {
        const spriteSheet = new SpriteSheet({
            image,
            imageWidth: 96,
            imageHeight: 128,
            spriteWidth: 32,
            spriteHeight: 32
        })
        const sprite = spriteSheet.getSprite(6, 100, 100, 1.2, 1.2)
        game.screen.drawSprite(sprite)
    }
}