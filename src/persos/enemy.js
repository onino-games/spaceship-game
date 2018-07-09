import * as PIXI from 'pixi.js';
import { SCREEN_WIDTH, ENEMY_SIZE, ENEMY_VELOCITY } from '../utils/constants';

let resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;

const buildEnemy = (opt) => {
	const enemy = new Sprite(resources[opt.mainImage].texture);
	Object.assign(enemy, {
		width: ENEMY_SIZE,
		height: ENEMY_SIZE,
		y: 0,
		x: (SCREEN_WIDTH - ENEMY_SIZE)/2,
		vx: ENEMY_VELOCITY,
		vy: 0,
		move: () => {
			enemy.x += enemy.vx;
			if (enemy.vx > 0 && enemy.x > SCREEN_WIDTH - ENEMY_SIZE) { enemy.vx = -enemy.vx; }
			if (enemy.vx < 0 && enemy.x < 0) { enemy.vx = -enemy.vx; }
		},
	});
	return enemy;
};

export default buildEnemy;