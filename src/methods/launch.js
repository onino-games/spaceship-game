import { build } from "./../persos/build.js"

export const launchBullet = function() {
    // Create new bullet
    let newBullet = build.bullet({
      vx: 0,
      vy: -10,
      x: this.player.x,
      y: this.player.y,
    })
    // Add new bullet to bullets Container (this will automatically make it move)
    this.bullets.addChild(newBullet)

    // Play the launch bullet sound
    this.rocketLaunchSound.stop()
    this.rocketLaunchSound.play()

    // Increment the number of launched bullets by one
    this.bulletNb += 1

    this.computeAccuracy()
  }

  export const launchAttack = function() {
    // Create new Attack 
    const newAttack = build.attack({
      vx: 0,
      vy: 10,
      x: this.enemy.x,
      y: this.enemy.y,
      mainImage: "persos/alien.png"
    })

    // Add new Attack to bullets Container (this will automatically make it move)
    this.attacks.addChild(newAttack)

    // Play the new attack sound
    this.attackLaunchSound.stop()
    this.attackLaunchSound.play()
  }
