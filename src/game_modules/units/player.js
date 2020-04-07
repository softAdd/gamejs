import { GameObject } from 'game_modules/game-object'
import PlayerController from 'game_modules/controllers/player-controller'
import { createPlayerSheet } from 'game_modules/sprite_sheets/player-sheet'

export class Player extends GameObject {
  constructor(spritePath, initialX = 0, initialY = 0) {
    super(spritePath, initialX, initialY)
    this.playerController = null
    this.spriteSheet = null
  }

  create(texture) {
    this.spriteSheet = createPlayerSheet(texture.baseTexture)
    super.createAnimated(texture, this.spriteSheet.stateList['default'])
    this.playerController = new PlayerController(this)
  }
}