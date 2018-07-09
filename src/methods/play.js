import isCollide from './../utils/collision.js';
import {SCREEN_HEIGHT} from './../utils/constants.js';

const play = function() {
	this.player.move();
	this.enemy.move();

	this.bullets.children.forEach((bullet) => {
		bullet.move();
		if (bullet.y < 0) { bullet.destroy(); }
	});

	this.attacks.children.forEach((attack) => {
		attack.move();
		if (attack.y > SCREEN_HEIGHT) { attack.destroy(); }
	});

	// COLLISION DETECTION
	this.bullets.children.forEach((bullet) => {
		this.attacks.children.forEach((attack) => {
			if (isCollide(bullet, attack) && bullet.touched === 0) {
				this.player.pls();
				bullet.touched += 1;
				this.hitNb += 1;
				this.hitNbScreen.text = this.hitNb.toString();
				this.hitSound.stop();
				this.hitSound.play();
				this.computeAccuracy();
				this.hitAttack({
					x: attack.x,
					y: attack.y
				});
				attack.destroy();
			}
		});
		if (bullet.touched > 0) { bullet.destroy(); }
	});
};

export default play;