import * as PIXI from 'pixi.js';

let Text = PIXI.Text,
	Container = PIXI.Container,
	TextStyle = PIXI.TextStyle;

let titleStyle = new TextStyle({
	fontFamily: 'Arial',
	fontSize: 36,
	fill: 'white',
	stroke: '#ff3300',
	strokeThickness: 4,
	dropShadow: true,
	dropShadowColor: '#000000',
	dropShadowBlur: 4,
	dropShadowAngle: Math.PI / 6,
	dropShadowDistance: 6,
});


let textStyle = new TextStyle({
	fontFamily: 'Arial',
	fontSize: 36,
	fill: 'white',
	stroke: '#ff3300',
	strokeThickness: 4,
	dropShadow: true,
	dropShadowColor: '#000000',
	dropShadowBlur: 4,
	dropShadowAngle: Math.PI / 6,
	dropShadowDistance: 6,
});

const intro = 'La France va mal, les cosmopolites ont pris le pouvoir. Rentre dans la peau d\'Henry de l\'Esquin pour les combattre';
const welcome = 'Bienvenue';

export const buildStartScene = () => {
	const scene = new Container();
	const welcomeText= new Text(welcome, titleStyle);
	const introText= new Text(intro, textStyle);
	scene.addChild(welcomeText, introText);
	return scene;
};