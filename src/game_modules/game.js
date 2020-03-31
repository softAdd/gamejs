import * as PIXI from 'pixi.js'

class Game {
  constructor(gameContainer) {
    this.gameContainer = gameContainer
    this.app = new PIXI.Application(
      {
        width: gameContainer.offsetWidth,
        height: gameContainer.clientHeight,
        resizeTo: gameContainer,
        backgroundColor: 0xAAAAAA
      }
    )
    this.create()
  }

  // setScreen(name) {
  //   Object.keys(this.display).forEach(screenName => {
  //     const screen = this.display[screenName]

  //     if (screenName === name) {
  //       screen.visible = true
  //       return
  //     }

  //     screen.visible = false
  //   })
  // }

  gameLoop(timestamp) {
    // console.log(timestamp)
  }

  create() {
    this.gameContainer.appendChild(this.app.view)

    // Object.keys(this.display).forEach(screenName => {
    //   this.app.stage.addChild(this.display[screenName])
    // })
  }

  run() {
    this.app.ticker.add(this.gameLoop)
  }

  pause() {
    this.app.ticker.remove(this.gameLoop)
  }
}

export default Game