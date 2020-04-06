import { globalController } from 'game_modules/global-controller'
import { SpriteSheet } from 'game_modules/sprite-sheet'

class PlayerController {
  constructor(player) {
    const { texture, sprite } = player
    this.playerTexture = texture
    this.playerBody = sprite
    this.baseSheet = texture.baseTexture
    this.playerSheet = new SpriteSheet(texture)

    globalController.registerReaction(this.keyboardReaction.bind(this))
  }

  keyboardReaction() {
    const { keyMap } = globalController
    // W
    if (keyMap['87']) {
      console.log(this.playerTexture.baseTexture)
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