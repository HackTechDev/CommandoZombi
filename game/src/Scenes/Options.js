import 'phaser';
import Button from '../Buttons/Button';

var keyS;

export default class Options extends Phaser.Scene {
  constructor () {
    super('Options');
  }

  init(data){
    this.previousScene = data.previousScene;

    console.log("previousScene: " + this.previousScene);
  }

  create () {
    this.music = this.sys.game.globals.music;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 200, 'checkedBox');
    this.musicText = this.add.text(250, 190, 'Activation Musique', { fontSize: 24 });

    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Activation Son', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', function () {
      this.music.musicOn = !this.music.musicOn;
      this.updateAudio();
    }.bind(this));

    this.soundButton.on('pointerdown', function () {
      this.music.soundOn = !this.music.soundOn;
      this.updateAudio();
    }.bind(this));


    if(this.previousScene === undefined) {
      this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Menu');
    }
    
    this.updateAudio();

    keyS = this.input.keyboard.addKey("s");
  }

  updateAudio() {
    if (this.music.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.music.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.music.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.music.bgMusicPlaying = true;
      }
    }

    if (this.music.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }

  update(time, delta) {
 
    if(keyS.isDown){
        if(this.previousScene != undefined) {
          console.log("Son");
          this.scene.start(this.previousScene);
        }
    }  
  }


};
