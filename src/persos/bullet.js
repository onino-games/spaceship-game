import * as PIXI from 'pixi.js'

let resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite


const buildBullet = (opt) => {
   let newBullet = new Sprite(resources[opt.mainImage].texture);
  newBullet.width=50
  newBullet.height=50
  newBullet.x = opt.x,
  newBullet.y = opt.y,
  newBullet.vx = opt.velocity
  newBullet.vy=0
  newBullet.move = () => {
    newBullet.x += newBullet.vx
    newBullet.y += newBullet.vy
  }
  return newBullet
 }


export const destroyBullet = function(bullet){
  let index = this.planes.indexOf(bullet)
  this.app.stage.removeChild(bullet)
   if (index > -1) {
    this.planes.splice(index, 1);
  }
}

export const launchBullet = function(){
  let opt = {
    velocity : 10,
    x : this.player.x,
    y : this.player.y,
    mainImage : "persos/plane.png"
  }
  let newBullet = buildBullet(opt)
   this.planes.push(newBullet)
   this.app.stage.addChild(newBullet)
}

export default buildBullet
