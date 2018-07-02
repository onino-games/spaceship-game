import * as PIXI from 'pixi.js'
import * as CST from "./../utils/constants.js"

import { buildPlayer } from "./../persos/player.js"
import buildEnemy from "./../persos/enemy.js"

import { buildInfoBar } from "./../decors/infos-bar.js"
import { buildStartScene } from "./../decors/start-scene.js"


const SCREEN_WIDTH = CST.SCREEN_WIDTH
const SCREEN_HEIGHT = CST.SCREEN_HEIGHT


let Application = PIXI.Application,
  Container = PIXI.Container;    


const setup = function () {

  // BUILD APP
  this.app = new Application({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    antialias: true,
    transparent: false,
    resolution: 1
  });

  // BUILD SCENES
  this.gameStartScene = buildStartScene();
  this.gameScene = new Container();
  this.gameOverScene = new Container();
  this.app.stage.addChild(this.gameStartScene, this.gameScene, this.gameOverScene);

  // BUILD INFOS DIPLAYED
  this.infoBar = buildInfoBar()
  this.hitNbScreen = this.infoBar.getChildAt(0)
  this.accuracy = this.infoBar.getChildAt(1)
  this.gameScene.addChild(this.infoBar);

  this.setupKeys()

  document.body.appendChild(this.app.view);

  //Create the `this.player` sprite 
  this.player = buildPlayer({
    mainImage: "persos/spaceship.png",
    plsImage: "persos/spaceship.png"
  })
  this.enemy = buildEnemy({
    mainImage: "persos/ovni.png"
  })

  this.gameScene.addChild(this.player, this.enemy);
  this.gameScene.addChild(this.bullets, this.attacks)

  //this.gameScene.visible=false
  this.gameOverScene.visible = false
  this.gameStartScene.visible = false

  // Start the game loop 
  this.app.ticker.add(delta => this.gameLoop(delta));

  // set game on start 
  this.startGame()
}

export default setup