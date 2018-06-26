import React, { Component } from 'react';
import './App.css';

import * as PIXI from 'pixi.js'
import {Howl }from 'howler'
import isCollide from "./utils/collision.js"
import keyboard from "./utils/keyboard.js"

import {buildPlayer} from "./persos/player.js"
import buildEnemy from "./persos/enemy.js"

import {buildBullet, buildAttack} from "./persos/build.js"
import {buildInfoBar} from "./decors/infos-bar.js"

import {buildStartScene} from "./decors/start-scene.js"

const PLAYER_VELOCITY = 10

let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;

/*
var rocketSound = new Howl({
      src: ['rocket.mp3'],
      sprite: {
        short: [0, 500],
        long :[0, 1300],
      },
   volume: 0.1,
    });

var lesquinSound = new Howl({
      src: ['lesquin.mp3'],
      sprite: {
        cosmo: [14000, 850],
        reemig :[194500, 1300],
        nonCauca : [219100, 1300]
      }
    });
*/
/*

var sarabandeTech = new Howl({
  src : ['sounds/music/sarabande-tech.mp3']
})
*/

class App extends Component {
  
  constructor(props){ 
    super(props)
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
    this.bullets=new Container();
    this.attacks=new Container();
    
    //Mouvements
      this.left = keyboard(37)
      this.up = keyboard(38)
      this.right = keyboard(39)
      this.down = keyboard(40)
      
    //Actions
      this.fire = keyboard(82)
      this.launchCosmo = keyboard(67)
      this.launchNonCauca = keyboard(69)
      this.startLaunchMig = keyboard(13)
      this.pauseGame = keyboard(32)
    
    // Sons
    this.reemigPlay
    this.cosmoPlay
    this.nonCaucaPlay
    
    //params
    this.nbOfMigDisplayed = 0
    this.hitNb = 0
    this.launchAttackLoop
    
    //Display
    this.hitNbScreen
    
   // this.destroyBullet=destroyBullet
  }
  
  componentDidMount(){
//Create a Pixi Application
    const self = this
    loader
      .add([
      "persos/spaceship.png",
     // "persos/spaceship.png",
      "persos/missile.png",
      "persos/ovni.png",
      "persos/alien.png",
    ])
      .load(function(){self.setup()});
}
  
 setup = () => {
    // BUILD APP
    this.app = new Application({ 
        width: 808, 
        height: 700,                       
        antialias: true, 
        transparent: false, 
        resolution: 1
      }
    );
    
    // BUILD SCENES
    this.gameStartScene =  buildStartScene();
    this.gameScene = new Container();
    this.gameOverScene = new Container();
    
    this.app.stage.addChild(this.gameStartScene, this.gameScene, this.gameOverScene);
    
    
     // BUILD INFOS DIPLAYED
    this.hitNbScreen= buildInfoBar()
    this.gameScene.addChild(this.hitNbScreen);
    
    this.setupKeys()
    document.body.appendChild(this.app.view);

    //Create the `this.player` sprite 
    this.player=buildPlayer({
      mainImage : "persos/spaceship.png",
      plsImage : "persos/spaceship.png"
    })

    this.enemy=buildEnemy({
      mainImage : "persos/ovni.png"
    })

    this.gameScene.addChild(this.player, this.enemy);
    this.gameScene.addChild(this.bullets, this.attacks)
    
    //this.gameScene.visible=false
    this.gameOverScene.visible=false
    this.gameStartScene.visible=false

   // Start the game loop 
    this.gameState=this.play
    this.app.ticker.add(delta => this.gameLoop(delta));
}
  
 destroy(type, instance){
   this[type].removeChild(instance)
   instance.destroy()
 }
 
 launchBullet = () => {
   let newBullet = buildBullet({
      vx : 30,
      x : this.player.x,
      y : this.player.y,
      mainImage : "persos/missile.png"
  })
   this.bullets.addChild(newBullet)
}

 launchAttack = () => {
   const newMigrant = buildAttack({
      vx : -10,
      x : this.enemy.x,
      y : this.enemy.y,
      mainImage : "persos/alien.png"
    })
   this.attacks.addChild(newMigrant)
 }
 
 gameLoop = () => {
   this.gameState()
 }
 
 start = () => {
   this.gamePlayScene.visible=true
   this.gameStartScene.visible=false
   this.gameOverScene.visible=false
   this.hitNb = 0
 }
 
 play = (delta) => {
   this.player.move()  
   this.enemy.move()
   
   this.bullets.children.forEach((bullet)=>{
      bullet.move() 
      if(bullet.x>900){this.destroy('bullets', bullet)}
   })
   
    this.attacks.children.forEach((attack)=>{
      attack.move() 
      if(attack.x<10){this.destroy('attacks', attack)}
   })
   
  // COLLISION DETECTION
   this.bullets.children.forEach((bullet)=>{ 
    this.attacks.children.forEach((attack)=>{
      if (isCollide(bullet, attack) && bullet.touched === 0) {
        this.player.pls()
        //rocketSound.play('long')
        this.destroy('attacks', attack)
        bullet.touched+=1
        this.hitNb+=1
        this.hitNbScreen.text=this.hitNb.toString()
      }
    })
    if(bullet.touched > 0){ this.destroy('bullets', bullet)}
  })
}
 
 stop = () => {}
 
 pause = () => {
   this.player.move()  
 }
    
 setupKeys = () => {
   
   this.pauseGame.press = () => {
     if(this.gameState === this.play){this.gameState=this.pause}
     else {this.gameState=this.play    }
   }
    
  this.startLaunchMig.press = () => {
    if(this.launchAttackLoop){
      window.clearInterval(this.launchAttackLoop)
      this.launchAttackLoop=false
    }
    else {this.launchAttackLoop = window.setInterval(this.launchAttack, 1000)}
  } 

  this.fire.press = () => {
     this.launchBullet()
    // lesquinSound.stop(this.reemigPlay)
    // this.reemigPlay = lesquinSound.play('reemig')
  }

  this.launchCosmo.press = () => {
   // lesquinSound.stop(this.cosmoPlay)
   // this.cosmoPlay = lesquinSound.play('cosmo')
  }

  this.launchNonCauca.press = () => {
   // lesquinSound.stop(this.nonCaucaPlay)
  // this.nonCaucaPlay = lesquinSound.play('nonCauca')
  }

  this.left.press = () => {
  this.player.vx = -PLAYER_VELOCITY ;
  this.player.vy = 0;
  };
  
  this.left.release = () => {
    if (!this.right.isDown && this.player.vy === 0) {
      this.player.vx = 0;
    }
  };

 /* this.up.press = () => {
    this.player.vy = -PLAYER_VELOCITY ;
    this.player.vx = 0;
  };
   
  this.up.release = () => {
    if (!this.down.isDown && this.player.vx === 0) {
      this.player.vy = 0;
    }
  };*/

  this.right.press = () => {
    this.player.vx = PLAYER_VELOCITY ;
    this.player.vy = 0;
  };
  this.right.release = () => {
    if (!this.left.isDown && this.player.vy === 0) {
      this.player.vx = 0;
    }
  };

  //Down
 /* this.down.press = () => {
    this.player.vy = PLAYER_VELOCITY ;
    this.player.vx = 0;
  };
  this.down.release = () => {
    if (!this.up.isDown && this.player.vx === 0) {
      this.player.vy = 0;
    }
  };*/
 }
  
  
  render() {
    return (
      <div className="App">
        <h1>Ultime space ballte</h1>
        <div id="game" style={{margin:"auto"}}>
          
        </div>
      </div>
    );
  }
}

export default App;
