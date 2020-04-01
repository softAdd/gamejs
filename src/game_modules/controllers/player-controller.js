import { keyMap } from 'game_modules/global-controller'

class PlayerController {
  constructor(player) {
    this.playerBody = player.sprite
  }

  keyboardMove() {
    // W
    if (keyMap['87']) {
      this.playerBody.y -= 3
    }
    // S
    if (keyMap['83']) {
      this.playerBody.y += 3
    }
    // D
    if (keyMap['68']) {
      this.playerBody.x += 3
    }
    // A
    if (keyMap['65']) {
      this.playerBody.x -= 3
    }
  }
}

export default PlayerController