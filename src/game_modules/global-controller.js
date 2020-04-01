class GlobalController {
  constructor() {
    this.keyMap = {}
    window.addEventListener('keydown', this.pressKey.bind(this))
    window.addEventListener('keyup', this.unpressKey.bind(this))
  }

  pressKey(evt) {
    this.keyMap[evt.keyCode] = true
  }

  unpressKey(evt) {
    this.keyMap[evt.keyCode] = false
  }

  destroy() {
    window.removeEventListener('keydown', this.pressKey.bind(this))
    window.removeEventListener('keyup', this.unpressKey.bind(this))
  }
}

const globalController = new GlobalController()

export const { keyMap } = globalController
