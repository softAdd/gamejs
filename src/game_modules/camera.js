export class Camera {
  constructor(app, currentScreen) {
    this.app = app
    this.currentScreen = currentScreen
    this.followed = null

    this.cachedCameraPosition = {
      x: 0,
      y: 0
    }
  }

  setCameraPosition(x, y) {
    this.app.stage.x = x
    this.app.stage.y = y
  }

  setFollowing(sprite) {
    this.followed = sprite
  }

  setStatic() {
    this.followed = null
  }

  updateFollowingCamera() {
    if (!this.followed) {
      return
    }

    const updatedPositionX = (this.app.view.width / 2 - this.followed.sprite.width / 2) - (this.followed.sprite.x - this.followed.sprite.width / 2)
    const updatedPositionY = (this.app.view.height / 2 - this.followed.sprite.height / 2) - (this.followed.sprite.y - this.followed.sprite.height / 2)

    if (updatedPositionX !== this.cachedCameraPosition.x || updatedPositionY !== this.cachedCameraPosition.y) {
      this.setCameraPosition(updatedPositionX, updatedPositionY)
    }
  }
}