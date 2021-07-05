import 'phaser';
import Button from '../../Buttons/Button';

var keyM;

export default class Mission1 extends Phaser.Scene {
  constructor () {
    super('Mission1');
  }

  init(data){
    this.previousScene = data.previousScene;

    console.log("previousScene: " + this.previousScene);
  }

  create () {

    

    this.text = this.add.text(300, 100, 'Mission 1', { fontSize: 40 });
    this.mission1Text = this.add.text(250, 190, '- Cartographier la ville d\'Ados\n- Visiter les maisons 68 et 70', { fontSize: 24 });

    if(this.previousScene === undefined) {
      this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'En avant !', 'Level0AdosCity');
    }

    keyM = this.input.keyboard.addKey("m");
  }

  update(time, delta) {
 
    if(keyM.isDown){
        if(this.previousScene != undefined) {
          console.log("Mission1");
          this.scene.start(this.previousScene);
        }
    }   
  }
};
