import { SpriteSheet } from 'game_modules/sprite-sheet'

const singleSpriteWidth = 128
const singleSpriteHeight = 128

export const createPlayerSheet = baseTexture => new SpriteSheet(baseTexture, {
  'default': [
    {
      row: 1,
      cols: [0],
      singleSpriteWidth,
      singleSpriteHeight
    }
  ],
  'go_right': [
    {
      row: 10,
      cols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      singleSpriteWidth,
      singleSpriteHeight
    }
  ],
  'go_down': [
    {
      row: 8,
      cols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      singleSpriteWidth,
      singleSpriteHeight
    }
  ],
  'go_up': [
    {
      row: 11,
      cols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      singleSpriteWidth,
      singleSpriteHeight
    }
  ],
  'go_left': [
    {
      row: 9,
      cols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      singleSpriteWidth,
      singleSpriteHeight
    }
  ],
})