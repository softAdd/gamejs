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
    this.camera = new Camera(this.app, this.screens.main)
    this.create()

    this.gameLoop = () => {
      globalController.runControllers()
      this.camera.updateFollowingCamera()
    }
  }

  create() {
    this.gameContainer.appendChild(this.app.view)
    // make screens available
    Object.keys(this.screens).forEach(screenName => {
      const screenContainer = this.screens[screenName].container
      this.app.stage.addChild(screenContainer)
    })
    this.screens.main.init(this.camera)

    globalController.register()
    this.app.ticker.add(() => this.gameLoop())
  }

  run() {
    this.app.ticker.add(this.gameLoop)
  }

  pause() {
    this.app.ticker.remove(this.gameLoop)
  }
}

export default Game