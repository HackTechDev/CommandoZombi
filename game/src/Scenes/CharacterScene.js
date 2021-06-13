import 'phaser';
import Button from '../Buttons/Button';

var keyE;

export default class CharacterScene extends Phaser.Scene {
  constructor () {
    super('Character');
  }

  init(data){
    this.previousScene = data.previousScene;
    this.player = data.player;

    console.log("Character Scene: previousScene" + this.previousScene);
  }

  create () {
    console.log("Character Scene: create");
    this.text = this.add.text(300, 100, "Character Sheet", { fontSize: 40 });
    this.mission1Text = this.add.text(250, 190, "Name: " + this.player.name, { fontSize: 24 });

    console.log("Character Scene: addKey ");
    keyE = this.input.keyboard.addKey("e");
  }

  update(time, delta) {
     if(keyE.isDown){
        if(this.previousScene != undefined) {
          console.log("Go to: previousScene");
          this.scene.start(this.previousScene);
        }
    } 
  }
};
