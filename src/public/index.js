import 'babel-polyfill'
import Game from 'game_modules/game'
import * as PIXI from 'pixi.js'

window.onload = () => {
  const gameContainer = document.querySelector('#js-gamebox')
  const game = new Game(gameContainer)
  game.run()

  // // player object
  // const player = new PIXI.Sprite.from('assets/32flower.png')

  // player.anchor.set(0.5)
  // player.x = app.view.width / 2
  // player.y = app.view.height / 2

  // app.stage.addChild(player)

  // // mouse interactions
  // app.stage.interactive = true

  // const movePlayer = evt => {
  //   const pos = evt.data.global

  //   player.x = pos.x
  //   player.y = pos.y
  // }

  // // app.stage.on('pointermove', movePlayer)

  // // keyboard event handlers
  // const keyMap = {}

  // const pressKey = evt => {
  //   keyMap[evt.keyCode] = true
  // }

  // const unpressKey = evt => {
  //   keyMap[evt.keyCode] = false
  // }

  // window.addEventListener('keydown', pressKey)
  // window.addEventListener('keyup', unpressKey)

  // // game loop
  // const gameLoop = () => {
  //   // W
  //   if (keyMap['87']) {
  //     player.y -= 3
  //   }
  //   // S
  //   if (keyMap['83']) {
  //     player.y += 3
  //   }
  //   // D
  //   if (keyMap['68']) {
  //     player.x += 3
  //   }
  //   // A
  //   if (keyMap['65']) {
  //     player.x -= 3
  //   }
  // }

  // app.ticker.add(gameLoop)

  // // preload assets
  // app.loader.baseUrl = 'assets'

  // app.loader
  //   .add('tree', 'sprites/96tree.png')
  //   .add('rock', 'sprites/32rock.png')
  //   .add('barrel', 'sprites/32barrel.png')

  // const showProgress = evt => {
  //   console.log(evt.progress)
  // }

  // const doneProgress = evt => {
  //   console.log('DONE, LOADING: ' + evt.loading)

  //   const tree = new PIXI.Sprite.from(app.loader.resources.tree.texture)

  //   tree.x = app.view.width / 4
  //   tree.y = app.view.height / 4
  //   tree.anchor.set(0.5)

  //   app.stage.addChild(tree)

  //   // following to mouse position
  //   let xVelocity = 0.1
  //   let yVelocity = 0.1
  //   let speed = 1
  //   let angle = 45

  //   const getMousePosition = () => app.renderer.plugins.interaction.mouse.global

  //   app.ticker.add(() => {
  //     const mousePosition = getMousePosition()

  //     const dx = mousePosition.x - tree.x
  //     const dy = mousePosition.y - tree.y

  //     angle = Math.atan2(dy, dx)

  //     xVelocity = Math.cos(angle) * speed
  //     yVelocity = Math.sin(angle) * speed

  //     tree.x += xVelocity
  //     tree.y += yVelocity
  //   })
  // }

  // const failProgress = err => {
  //   console.log('ERROR: ' + err.message)
  // }

  // app.loader.onProgress.add(showProgress)
  // app.loader.onComplete.add(doneProgress)
  // app.loader.onError.add(failProgress)

  // app.loader.load()
}