import * as PIXI from 'pixi.js'
import menuScreen from 'game_modules/screens/menu-screen'
import mainScreen from 'game_modules/screens/main-screen'

class Game {
  constructor() {
    this.app = new PIXI.Application(
      {
        width: 800,
        height: 600,
        backgroundColor: 0xAAAAAA
      }
    )
    this.display = {
      'menu': menuScreen,
      'main': mainScreen
    }
  }

  setScreen(name) {
    Object.keys(this.display).forEach(screenName => {
      const screen = this.display[screenName]

      if (screenName === name) {
        screen.visible = true
        return
      }

      screen.visible = false
    })
  }

  gameLoop(timestamp) {
    // console.log(timestamp)
  }

  create() {
    document.body.appendChild(this.app.view)

    Object.keys(this.display).forEach(screenName => {
      this.app.stage.addChild(this.display[screenName])
    })
  }

  run() {
    this.app.ticker.add(this.gameLoop)
  }

  pause() {
    this.app.ticker.remove(this.gameLoop)
  }
}

const game = new Game()
export const { app } = game
export default game