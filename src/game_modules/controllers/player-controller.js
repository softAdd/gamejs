import { globalController } from 'game_modules/global-controller'

class PlayerController {
  constructor(player) {
    const { texture, sprite, spriteSheet } = player
    this.playerTexture = texture
    this.playerBody = sprite
    this.animationsList = spriteSheet.stateList
    globalController.registerReaction(this.keyboardReaction.bind(this))
    this.cachedMovement = [0, 0, 0, 0]
    console.log(this)
  }

  keyboardReaction() {
    const { keyMap } = globalController
    
    if (!Object.keys(keyMap).some(key => keyMap[key] === true)) {
      this.playerBody.stop()
      this.cachedMovement = [0, 0, 0, 0]
      this.playerBody.textures = this.animationsList['default']
    }
    
    // W
    if (keyMap['87']) {
      
      this.cachedMovement[0] = 1
      
      if (this.cachedMovement.reduce((prev, next) => (prev + next)) > 1) {
        this.cachedMovement = this.cachedMovement.map(val => 0)
        this.cachedMovement[0] = 1
        this.playerBody.stop()
      }

      if (!this.playerBody.playing) {
        this.playerBody.textures = this.animationsList['go_up']
        this.playerBody.play()
      }

      this.playerBody.y -= 2
    }
    // S
    if (keyMap['83']) {
      this.cachedMovement[1] = 1
      
      if (this.cachedMovement.reduce((prev, next) => (prev + next)) > 1) {
        this.cachedMovement = this.cachedMovement.map(val => 0)
        this.cachedMovement[1] = 1
        this.playerBody.stop()
      }
      
      if (!this.playerBody.playing) {
        this.playerBody.textures = this.animationsList['go_down']
        this.playerBody.play()
      }

      this.playerBody.y += 2
    }
    // D
    if (keyMap['68']) {
      this.cachedMovement[2] = 1
      
      if (this.cachedMovement.reduce((prev, next) => (prev + next)) > 1) {
        this.cachedMovement = this.cachedMovement.map(val => 0)
        this.cachedMovement[2] = 1
        this.playerBody.stop()
      }
      
      if (!this.playerBody.playing) {
        this.playerBody.textures = this.animationsList['go_right']
        this.playerBody.play()
      }

      this.playerBody.x += 2
    }
    // A
    if (keyMap['65']) {
      this.cachedMovement[3] = 1
      
      if (this.cachedMovement.reduce((prev, next) => (prev + next)) > 1) {
        this.cachedMovement = this.cachedMovement.map(val => 0)
        this.cachedMovement[3] = 1
        this.playerBody.stop()
      }
      
      if (!this.playerBody.playing) {
        this.playerBody.textures = this.animationsList['go_left']
        this.playerBody.play()
      }

      this.playerBody.x -= 2
    }
    
  }
}

export default PlayerController