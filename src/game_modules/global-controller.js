class GlobalController {
  constructor() {
    this.keyMap = {}
    this.reactions = []
  }

  pressKey(evt) {
    this.keyMap[evt.keyCode] = true
  }

  unpressKey(evt) {
    this.keyMap[evt.keyCode] = false
  }

  registerReaction(reaction) {
    this.reactions.push(reaction)
  }

  register() {
    window.addEventListener('keydown', this.pressKey.bind(this))
    window.addEventListener('keyup', this.unpressKey.bind(this))
  }

  unregister() {
    window.removeEventListener('keydown', this.pressKey.bind(this))
    window.removeEventListener('keyup', this.unpressKey.bind(this))
    this.reactions = []
    this.keyMap = {}
  }

  runControllers() {
    this.reactions.forEach(reaction => {
      reaction()
    })
  }
}

export const globalController = new GlobalController()