import * as PIXI from 'pixi.js'

let loader = PIXI.loader

const load = function() {
    //Create a Pixi Application
    const self = this
    loader
      .add([
        "persos/spaceship.png",
        "persos/missile.png",
        "persos/ovni.png",
        "persos/alien.png",
        "persos/explosion.png"
      ])
      .load(function () { self.setup() });
  }

  export default load