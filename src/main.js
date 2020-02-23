import { Game } from 'game_modules/game'

window.onload = () => {
    const rootElement = document.getElementById('js-gamebox')
    const game = new Game(rootElement, 'canvasGame')
    game.run()
}