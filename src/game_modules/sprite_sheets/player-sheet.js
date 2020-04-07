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
  'up_waiting': [
    {
      row: 1,
      cols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      singleSpriteWidth,
      singleSpriteHeight
    },
    {
      row: 6,
      cols: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      singleSpriteWidth,
      singleSpriteHeight
    }
  ]
})