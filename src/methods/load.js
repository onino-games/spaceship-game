import * as PIXI from 'pixi.js'

let loader = PIXI.loader

const load = function () {
  loader.add([
    "persos/spaceship.png",
    "persos/missile.png",
    "persos/ovni.png",
    "persos/alien.png",
    "persos/explosion.png"
  ])
    .load(this.setup);
}

export default load