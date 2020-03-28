import PlayerController from 'game_modules/controllers/player-controller'

class Player {
  constructor(texture) {
    this.sprite = new PIXI.Sprite.from(texture)
    this.playerController = new PlayerController(this)
  }
}

export default Player