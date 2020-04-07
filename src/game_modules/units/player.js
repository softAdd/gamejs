import { GameObject } from 'game_modules/game-object'
import PlayerController from 'game_modules/controllers/player-controller'
import { createPlayerSheet } from 'game_modules/sprite_sheets/player-sheet'

export class Player extends GameObject {
  constructor(spritePath, initialX = 0, initialY = 0) {
    super(spritePath, initialX, initialY)
    this.playerController = null
  }

  create(texture) {
    const spriteSheet = createPlayerSheet(texture.baseTexture)
    super.createAnimated(texture, spriteSheet.stateList['up_waiting'])
    this.playerController = new PlayerController(this)
  }
}