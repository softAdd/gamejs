import * as PIXI from 'pixi.js'
import MainScreen from 'game_modules/screens/main-screen'
import { globalController } from 'game_modules/global-controller'
import { Camera } from './camera'

class Game {
  constructor(gameContainer) {
    this.gameContainer = gameContainer
    this.app = new PIXI.Application(
      {
        width: gameContainer.offsetWidth,
        height: gameContainer.clientHeight,
        resizeTo: gameContainer,
        transparent: true
      }
    )
    this.screens = {
      main: new MainScreen('main', true)
    }
    this.currentScreen = this.screens.main.camera
    this.camera = this.currentScreen?.camera
    this.create()
  }

  gameLoop() {
    globalController.runControllers()
    this.camera?.updateCoords()
  }

  create() {
    this.gameContainer.appendChild(this.app.view)
    // make screens available
    Object.keys(this.screens).forEach(screenName => {
      const screenContainer = this.screens[screenName].container
      this.app.stage.addChild(screenContainer)
    })
    
    this.app.ticker.add(this.gameLoop)
    globalController.register()
  }

  run() {
    this.app.ticker.add(this.gameLoop)
  }

  pause() {
    this.app.ticker.remove(this.gameLoop)
  }
}

export default Game