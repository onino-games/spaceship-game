import * as PIXI from 'pixi.js'

let resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite


export const buildSprite = (opt) => {
   let newSprite = new Sprite(resources[opt.mainImage].texture);
    newSprite.width=50
    newSprite.height=50
    Object.assign(newSprite, opt)
    return newSprite
 }


export const buildBullet = (opt) => {
  let newBullet = buildSprite(opt)
  newBullet.move = () => {
    newBullet.x += newBullet.vx
  }
  newBullet.touched=0
  return newBullet
 }

export const buildAttack = (opt) => {
  const newAttack = buildSprite(opt)
  newAttack.move = () => {
    newAttack.x+=newAttack.vx
  }
  return newAttack
}



export const  build = {
  bullet : buildBullet,
  attack : buildAttack
}

