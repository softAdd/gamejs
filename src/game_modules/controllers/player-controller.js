import { globalController } from 'game_modules/global-controller'

class PlayerController {
  constructor(player) {
    const { texture, sprite } = player
    this.playerTexture = texture
    this.playerBody = sprite
    globalController.registerReaction(this.keyboardReaction.bind(this))
  }

  keyboardReaction() {
    const { keyMap } = globalController
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