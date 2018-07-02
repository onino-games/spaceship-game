import * as PIXI from 'pixi.js'
import { SPRITE_SIZE_DEFAULT } from '../utils/constants';

let resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite

export const buildSprite = (opt) => {
   let newSprite = new Sprite(resources[opt.mainImage].texture);
    return Object.assign(newSprite,{
      width : SPRITE_SIZE_DEFAULT,
      height : SPRITE_SIZE_DEFAULT,
      move : () => {
        newSprite.x += newSprite.vx
        newSprite.y += newSprite.vy
      },
      ...opt,
    })
 }

export const buildBullet = opt =>  buildSprite({
    mainImage: "persos/missile.png",
    touched : 0,
    ...opt,
  })

 export const buildAttack = opt => buildSprite({
    mainImage: "persos/alien.png",
    ...opt,
  })



export const  build = {
  bullet : buildBullet,
  attack : buildAttack
}

