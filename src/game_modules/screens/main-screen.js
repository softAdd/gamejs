import * as PIXI from 'pixi.js'

class MainScreen extends Screen {
  constructor() {
    this.screen = new PIXI.Container()
    this.screen.visible = false
    this.loader = new PIXI.Loader()
    this.sprites = {}
  }

  createLoadingQueue() {
    Object.keys(this.sprites).forEach(spriteName => {
      const sprite = sprites[spriteName]
      this.loader.add(spriteName, sprite.path)
    })
  }

  doneLoadingResources() {
    Object.keys(this.loader.resources).forEach(resourseName => {
      const sourceSprite = sprites[resourseName]
      const loadedSprite = new PIXI.Sprite.from(app.loader.resources[resourseName].texture)
      
      loadedSprite.x = sourceSprite.x
      loadedSprite.y = sourceSprite.y
      loadedSprite.anchor.set(sourceSprite.anchor)

      this.screen.addChild(loadedSprite)
    })
    const tree = new PIXI.Sprite.from(app.loader.resources.tree.texture)
  }

  init() {
    this.createLoadingQueue()
    this.loader.onComplete.add(this.doneLoadingResources)
  }
}

export default MainScreen