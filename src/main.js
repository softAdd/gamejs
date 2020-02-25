import { Game } from 'game_modules/game'

window.onload = () => {
    const rootElement = document.querySelector('#js-gamebox')
    const game = new Game(rootElement, 'gameCanvas')
    let image = new Image()
    image.src = '/assets/barrel32x32transparent.png'
    image.onload = () => {
        game.screen.drawImage(image, 10, 10)
    }
}