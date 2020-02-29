export class KeyboardState {
    constructor() {
        this._keyMap = {
            'w': false,
            'a': false,
            's': false,
            'd': false
        }

        document.addEventListener('keydown', evt => {
            this.setPressedKey(evt.key)
        })
        document.addEventListener('keyup', evt => {
            this.resetKey(evt.key)
        })
    }

    setPressedKey(key) {
        this._keyMap[key] = true
    }

    resetKey(key) {
        this._keyMap[key] = false
    }

    getKeyMap() {
        return { ...this._keyMap }
    }
}