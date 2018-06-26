import * as PIXI from 'pixi.js'

let resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite

const buildEnemy = (opt) => {
  const enemy = new Sprite(resources[opt.mainImage].texture);
  enemy.width=100
  enemy.height=100
  enemy.y = 0; 
  enemy.x = 400
  enemy.vx=3
  enemy.vy=0
  enemy.move = () => {
    enemy.x += enemy.vx
   if (enemy.vx>0 && enemy.x >900 ){enemy.vx=-enemy.vx}
   if (enemy.vx<0 && enemy.x < 0 ){enemy.vx=-enemy.vx}
  }
  return enemy
 }
 
export default buildEnemy