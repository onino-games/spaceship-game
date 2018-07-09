import * as PIXI from 'pixi.js'
import keyboard from "./utils/keyboard.js"

// METHODS IMPORTS
import setupKeys from './methods/setup-keys';
import play from "./methods/play"
import setup from './methods/setup';
import load from './methods/load';
import { launchAttack, launchBullet } from './methods/launch';
import { startGame, loopAttack, computeAccuracy, hitAttack, gameLoop, reStart, stop, pause } from './methods/methods';
import sounds from './sounds/sounds';

let Container = PIXI.Container 

class App {

  constructor() {
    this.app

    //Etat
    this.gameState

    //Scenes
    this.gameStartScene
    this.gameScene
    this.gameOverScene

    //Personnages
    this.player
    this.enemy

    // Projectiles
    this.bullets = new Container();
    this.attacks = new Container();

    //Mouvements
    this.left = keyboard(37)
    this.up = keyboard(38)
    this.right = keyboard(39)
    this.down = keyboard(40)

    //Actions
    this.fire = keyboard(82)
    this.startLaunchMig = keyboard(13)
    this.pauseGame = keyboard(32)

    // Sons
    sounds.bind(this)()
    
    //params
    this.nbOfMigDisplayed = 0
    this.bulletNb = 0
    this.hitNb = 0
    this.launchAttackLoop

    //Display
    this.hitNbScreen
    this.accuracy = 100
  }

  load = load.bind(this)
  setup = setup.bind(this)
  launchBullet = launchBullet.bind(this)
  launchAttack = launchAttack.bind(this)
  setupKeys = setupKeys.bind(this)
  play = play.bind(this)
  startGame = startGame.bind(this)
  loopAttack = loopAttack.bind(this)
  computeAccuracy = computeAccuracy.bind(this)
  hitAttack = hitAttack.bind(this)
  gameLoop = gameLoop.bind(this)
  reStart = reStart.bind(this)
  play = play.bind(this)
  stop =  stop.bind(this)
  pause = pause.bind(this)
}

export default App;
