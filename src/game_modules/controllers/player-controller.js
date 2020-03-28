import globalController from 'game_modules/global-controller'

class PlayerController {
  constructor(player) {
    this.playerSprite = player.sprite
  }

  keyboardMove() {
    const { keyMap } = globalController
    // W
    if (keyMap['87']) {
      this.playerSprite.y -= 3
    }
    // S
    if (keyMap['83']) {
      this.playerSprite.y += 3
    }
    // D
    if (keyMap['68']) {
      this.playerSprite.x += 3
    }
    // A
    if (keyMap['65']) {
      this.playerSprite.x -= 3
    }
  }
}

export default PlayerController