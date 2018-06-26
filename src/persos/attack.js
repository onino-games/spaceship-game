import * as PIXI from 'pixi.js'

let resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite

export const buildAttack = (opt) => {
  const newAttack = new Sprite(resources[opt.mainImage].texture);
  newAttack.width=70
  newAttack.height=70
  newAttack.x = opt.x,
  newAttack.y = opt.y,
  newAttack.vx = opt.velocity
  newAttack.vy = 0

  newAttack.move = () => {
    newAttack.x+=newAttack.vx
  }
  return newAttack
}

export const destroyAttack = function(bullet){
  let index = this.migrants.indexOf(bullet)
  this.app.stage.removeChild(bullet)
   if (index > -1) {
    this.migrants.splice(index, 1);
  }
}

export const launchAttack = function(){
  let opt = {
    velocity : -10,
    x : this.enemy.x,
    y : this.enemy.y,
    mainImage : "persos/jawad.png"
  }
   let newAttack = buildAttack(opt)
   this.migrants.push(newAttack)
   this.app.stage.addChild(newAttack)
}