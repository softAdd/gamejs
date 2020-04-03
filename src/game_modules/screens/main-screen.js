import * as PIXI from 'pixi.js'
import { Player } from 'game_modules/units/player'
import { GameObject } from 'game_modules/game-object'

class MainScreen {
  constructor(name, isVisible = false) {
    this.container = new PIXI.Container()
    this.configContainer(name, isVisible)
    this.loader = new PIXI.Loader()
    this.sprites = {
      'player': new Player('assets/sprites/32rock.png', 20, 20),
      'tree': new GameObject('assets/sprites/96tree.png', 60, 60)
    }
    if (isVisible) {
      this.init()
    }
  }

  configContainer(name, isVisible) {
    const { container } = this
    container.name = name
    container.visible = isVisible
    container.interactive = true
  }

  createLoadingQueue() {
    Object.keys(this.sprites).forEach(spriteName => {
      const gameObject = this.sprites[spriteName]

      this.loader.add(spriteName, gameObject.spritePath)
    })
  }

  doneLoadingResources() {
    Object.keys(this.loader.resources).forEach(resourseName => {
      const gameObject = this.sprites[resourseName]
      const currentTexture = this.loader.resources[resourseName].texture

      gameObject.create(currentTexture)

      this.container.addChild(gameObject.sprite)
    })
  }

  init() {
    this.createLoadingQueue()
    this.loader.load()
    this.loader.onComplete.add(this.doneLoadingResources.bind(this))
  }
}

export default MainScreen