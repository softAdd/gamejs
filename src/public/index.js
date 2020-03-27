import 'babel-polyfill'
import game, { app } from 'game_modules/game'
import * as PIXI from 'pixi.js'

window.onload = () => {
  // main game class
  game.create()

  // player object
  const player = new PIXI.Sprite.from('assets/32flower.png')
  player.anchor.set(0.5)
  player.x = app.view.width / 2
  player.y = app.view.height / 2

  app.stage.addChild(player)

  // mouse interactions
  app.stage.interactive = true
  
  const movePlayer = evt => {
    const pos = evt.data.global

    player.x = pos.x
    player.y = pos.y
  }

  app.stage.on('pointermove', movePlayer)
}