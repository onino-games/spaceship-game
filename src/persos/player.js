import * as PIXI from 'pixi.js';
import { SCREEN_HEIGHT, PLAYER_SIZE, SCREEN_WIDTH, DELAY_DEFAULT } from '../utils/constants';

let resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;

export const buildPlayer = (opt) => {
	const player = new Sprite(resources[opt.mainImage].texture);
	Object.assign(player, {
		width: PLAYER_SIZE,
		height: PLAYER_SIZE,
		x : (SCREEN_WIDTH-PLAYER_SIZE)/2,
		y: SCREEN_HEIGHT - PLAYER_SIZE,
		vx: 0,
		vy: 0,
		pls: () => {
			player.texture = resources[opt.plsImage].texture;
			window.setTimeout(() => player.texture = resources[opt.mainImage].texture, DELAY_DEFAULT);
		},
		move: () => {
			player.x += player.vx;
			player.y += player.vy;
		},
	});
	return player;
};


