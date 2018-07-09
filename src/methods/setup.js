import * as PIXI from 'pixi.js';
import * as CST from './../utils/constants.js';

import { buildPlayer } from './../persos/player.js';
import buildEnemy from './../persos/enemy.js';

import { buildInfoBar } from './../decors/infos-bar.js';
import { buildStartScene } from './../decors/start-scene.js';



let Application = PIXI.Application,
	Container = PIXI.Container;


const setup = function () {

	// BUILD APP
	this.app = new Application({
		width: CST.SCREEN_WIDTH,
		height: CST.SCREEN_HEIGHT,
		antialias: true,
		transparent: false,
		resolution: 1
	});

	// BUILD SCENES
	this.gameStartScene = buildStartScene();
	this.gameScene = new Container();
	this.gameOverScene = new Container();
	this.app.stage.addChild(this.gameStartScene, this.gameScene, this.gameOverScene);

	// GAME SCENE
	var background = new PIXI.Sprite.fromImage(CST.IMG_BACKGROUND);
	background.width = CST.SCREEN_WIDTH;
	background.height = CST.SCREEN_HEIGHT;
	this.gameScene.addChild(background);

	// BUILD INFOS DIPLAYED
	this.infoBar = buildInfoBar();
	this.hitNbScreen = this.infoBar.getChildAt(0);
	this.accuracy = this.infoBar.getChildAt(1);
	this.gameScene.addChild(this.infoBar);

	this.setupKeys();

	const gameContainer = document.createElement('div');

	gameContainer.style.width = '100%';
	gameContainer.style.height = '100%';
	gameContainer.style.display = 'flex';
	gameContainer.style.justifyContent = 'center';
	gameContainer.style.alignItems = 'center';


	const wrapper = document.createElement('div');

	document.body.append(gameContainer);
	wrapper.append(this.app.view);
	gameContainer.append(wrapper);


	//Create the `this.player` sprite 
	this.player = buildPlayer({
		mainImage: CST.IMG_PLAYER,
	});
	this.enemy = buildEnemy({
		mainImage: CST.IMG_ENEMY
	});

	this.gameScene.addChild(this.player, this.enemy);
	this.gameScene.addChild(this.bullets, this.attacks);

	//this.gameScene.visible=false
	this.gameOverScene.visible = false;
	this.gameStartScene.visible = false;

	// Start the game loop 
	this.app.ticker.add(delta => this.gameLoop(delta));

	// set game on start 
	this.startGame();
};

export default setup;