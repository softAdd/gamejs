class GlobalController {
  constructor() {
    this.keyMap = {}
    window.addEventListener('keydown', this.pressKey)
    window.addEventListener('keyup', this.unpressKey)
  }

  pressKey() {
    this.keyMap[evt.keyCode] = true
  }

  unpressKey() {
    this.keyMap[evt.keyCode] = false
  }

  destroy() {
    window.removeEventListener('keydown', this.pressKey)
    window.removeEventListener('keyup', this.unpressKey)
  }
}

const globalController = new GlobalController()

export default globalController