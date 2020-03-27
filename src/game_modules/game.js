import * as PIXI from 'pixi.js'

class Game {
  constructor() {
    this.app = new PIXI.Application(
      {
        width: 800,
        height: 600,
        backgroundColor: 0xAAAAAA
      }
    )
  }

  create() {
    document.body.appendChild(this.app.view)
  }
}

const game = new Game()
export const { app } = game
export default game