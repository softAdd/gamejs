import GameObject from 'game_modules/game-object'
import PlayerController from 'game_modules/controllers/player-controller'

class Player extends GameObject {
  constructor(spritePath, x, y) {
    super(x, y)
    this.spritePath = spritePath
    this.playerController = null
  }

  create(texture) {
    super.create(texture)
    this.playerController = new PlayerController(this)
  }
}

export default Player