import * as PIXI from 'pixi.js'

let Text = PIXI.Text,
TextStyle = PIXI.TextStyle;

let style = new TextStyle({
  fontFamily: "Arial",
  fontSize: 36,
  fill: "white",
  stroke: '#ff3300',
  strokeThickness: 4,
  dropShadow: true,
  dropShadowColor: "#000000",
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
});


export const buildInfoBar = () => {
  const hitNbScreen= new Text("0", style);
  return hitNbScreen
}

    