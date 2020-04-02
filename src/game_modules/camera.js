export class Camera {
    constructor(width, height, screenX, screenY, scrollEdge = 200) {
        this.width = width
        this.height = height
        this.screenX = screenX
        this.screenY = screenY
        this.scrollEdge = scrollEdge
        this.x = 0
        this.y = 0
        this.isFollow = false
        this.followingGameObject = null
    }

    followGameObject(sprite) {
        this.isFollow = true
        this.followGameObject = sprite
    }

    updateCoords() {
        if (!this.isFollow) {
            return
        }

        if(this.followingGameObject.x > (this.x + this.width - this.scrollEdge)) {
            this.x = Math.min(this.limitX, this.followingGameObject.x - this.width + this.scrollEdge);
        }

        if(this.followingGameObject.x < (this.x + this.scrollEdge)) {
            this.x = Math.max(0, this.followingGameObject.x - this.scrollEdge);
        }

        if(this.followingGameObject.y > (this.y + this.height - this.scrollEdge)) {
            this.y = Math.min(this.limitY, this.followingGameObject.y - this.height + this.scrollEdge);
        }

        if(this.followingGameObject.y < (this.y + this.scrollEdge)) {
            this.y = Math.max(0, this.followingGameObject.y - this.scrollEdge);
        }
    }
}