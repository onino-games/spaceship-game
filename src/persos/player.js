import * as PIXI from 'pixi.js'

let resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite

export const buildPlayer = (opt) => {
  const player = new Sprite(resources[opt.mainImage].texture);
  player.width=100
  player.height=100
  player.y = 600; 
  player.vx=0
  player.vy=0
  player.pls = () => {
    player.texture=resources[opt.plsImage].texture
    window.setTimeout(()=>player.texture=resources[opt.mainImage].texture, 100)
  }
  player.move = () => {
    player.x += player.vx;
    player.y += player.vy; 
  }
  return player
 }
 
 
