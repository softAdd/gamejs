import * as PIXI from 'pixi.js'
import MainScreen from 'game_modules/screens/main-screen'
import { globalController } from 'game_modules/global-controller'

class Game {
  constructor(gameContainer) {
    this.gameContainer = gameContainer
    this.app = new PIXI.Application(
      {
        width: gameContainer.offsetWidth - 100,
        height: gameContainer.clientHeight - 100,
        // resizeTo: gameContainer,
        // transparent: true
        backgroundColor: 0x103322
      }
    )
    this.screens = {
      main: new MainScreen('main', true)
    }
    this.create()

    this.gameLoop = () => {
      globalController.runControllers()
    }
  }

  create() {
    this.gameContainer.appendChild(this.app.view)
    // make screens available
    Object.keys(this.screens).forEach(screenName => {
      const screenContainer = this.screens[screenName].container
      this.app.stage.addChild(screenContainer)
    })

    globalController.register()
    this.app.ticker.add(() => this.gameLoop())
    console.log(this.app)
  }

  run() {
    this.app.ticker.add(this.gameLoop)
  }

  pause() {
    this.app.ticker.remove(this.gameLoop)
  }
}

export default Game