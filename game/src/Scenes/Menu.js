import 'phaser';
import Config from '../Config/Config';
import Button from '../Buttons/Button';

var keyM;

export default class Menu extends Phaser.Scene {
  constructor () {
    super('Menu');
  }

  init(data){
    this.previousScene = data.previousScene;

    console.log("previousScene: " + this.previousScene);
  }

  preload() {
        this.load.image('background', 'assets/images/team.jpg');
        this.load.audio('bgMusic', 'assets/theme/Surrounded-by-the-Enemy.mp3');
    }

  create () {
    this.add.image(0, 33, 'background').setOrigin(0).setScale(1);

    this.characterButton = new Button(this, Config.width/2, Config.height/2, 'blueButton1', 'blueButton2', 'Soldat', 'Character');

    this.missionButton = new Button(this, Config.width/2 + 200, Config.height/2, 'blueButton1', 'blueButton2', 'Mission', 'Mission1');

    // Options
    this.optionsButton = new Button(this, Config.width/2, Config.height/2 + 100, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, Config.width/2, Config.height/2 + 200, 'blueButton1', 'blueButton2', 'Crédits', 'Credits');

    this.helpButton = new Button(this, Config.width/2 + 200, Config.height/2 + 200, 'blueButton1', 'blueButton2', 'Aide', 'Help');

    this.music = this.sys.game.globals.music;
    if (this.music.musicOn === true && this.music.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.music.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

    keyM = this.input.keyboard.addKey("m");

  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(Config.width/2, Config.height/2 - offset * 100, Config.width, Config.height)
    );
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }

    
};
