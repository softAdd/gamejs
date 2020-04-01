import 'babel-polyfill'
import Game from 'game_modules/game'

window.onload = () => {
  const gameContainer = document.querySelector('#js-gamebox')
  const game = new Game(gameContainer)
  game.run()
}