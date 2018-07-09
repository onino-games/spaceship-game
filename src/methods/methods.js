import { buildSprite } from './../persos/build.js';
import { EXPLOSION_LIFESPAN } from '../utils/constants.js';


export const startGame = function() {
	this.gameState = this.play;
	//this.gameState = this.start
	//this.playMusic.play()
};

export const loopAttack = function() {
	if (this.launchAttackLoop) {
		window.clearInterval(this.launchAttackLoop);
		this.launchAttackLoop = false;
	}
	else { this.launchAttackLoop = window.setInterval(this.launchAttack, 1000); }
};

export const computeAccuracy = function() {
	const accuracy = Math.round(this.hitNb / this.bulletNb * 1000) / 10;
	this.accuracy.text = accuracy;
};

export const hitAttack = function(opt) {
	const explo = buildSprite({
		...opt,
		mainImage: 'persos/explosion.png'
	});
	this.gameScene.addChild(explo);
	window.setTimeout(() => {
		explo.destroy();
	}, EXPLOSION_LIFESPAN);
};

export const gameLoop = function(delta) {
	this.gameState(delta);
};

export const reStart = function() {
	this.gamePlayScene.visible = true;
	this.gameStartScene.visible = false;
	this.gameOverScene.visible = false;
	this.hitNb = 0;
};

export const reset = function(){
	this.gamePlayScene.visible = true;
	this.gameStartScene.visible = false;
	this.gameOverScene.visible = false;
	this.hitNb = 0;
	this.bulletNb = 0;
	this.accuracy = 0;
	this.app.stage.children.forEach(child => child.destroy);
	this.setup();
};


export const stop = function() { };

export const pause = function() {
	this.player.move();
};