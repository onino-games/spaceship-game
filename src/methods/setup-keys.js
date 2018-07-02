
import * as CST from "./../utils/constants.js"

const PLAYER_VELOCITY = CST.PLAYER_VELOCITY

const setupKeys = function() {
    this.pauseGame.press = () => {
      if (this.gameState === this.play) { this.gameState = this.pause }
      else { this.gameState = this.play }
    }

    this.startLaunchMig.press = this.loopAttack
    this.fire.press = this.launchBullet


    this.left.press = () => {
      this.player.vx = -PLAYER_VELOCITY;
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
      this.player.vx = PLAYER_VELOCITY;
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

  export default setupKeys