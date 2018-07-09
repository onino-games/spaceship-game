import * as PIXI from 'pixi.js';
import { IMG_PLAYER, IMG_MISSILE, IMG_ENEMY, IMG_ATTACK, IMG_BOUM, IMG_BACKGROUND } from '../utils/constants';

let loader = PIXI.loader;

const load = function () {
	loader.add([
		IMG_PLAYER,
		IMG_MISSILE,
		IMG_ENEMY,
		IMG_ATTACK,
		IMG_BOUM,
		IMG_BACKGROUND
	])
		.load(this.setup);
};

export default load;