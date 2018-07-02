import { Howl } from 'howler'

const sounds = function () {
  this.playMusic = new Howl({
    src: ['sounds/sarabande-tech.mp3']
  })
  this.rocketLaunchSound = new Howl({
    src: ['sounds/rocket-launch.mp3'],
    volume: 0.1,
  });
  this.attackLaunchSound = new Howl({
    src: ['sounds/laser-short.mp3'],
    volume: 0.1,
  });
  this.hitSound = new Howl({
    src: ['sounds/shotgun.mp3'],
    volume: 0.1,
  });
}

export default sounds