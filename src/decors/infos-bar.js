import * as PIXI from 'pixi.js'

let Text = PIXI.Text,
TextStyle = PIXI.TextStyle,
Container = PIXI.Container;

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
  const infoBar = new Container()
  const hitNbScreen= new Text("0", style);
  const accuracy= new Text("0", style);
  accuracy.y=30
  infoBar.addChild(hitNbScreen, accuracy)
  return infoBar
}

    