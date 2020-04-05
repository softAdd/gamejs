import { GameObject } from 'game_modules/game-object'
import PlayerController from 'game_modules/controllers/player-controller'

export class Player extends GameObject {
  constructor(spritePath, initialX, initialY) {
    super(spritePath, initialX, initialY)
    this.playerController = null
  }

  create(texture) {
    super.create(texture)
    this.playerController = new PlayerController(this)
  }
}