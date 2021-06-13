import 'phaser';
import Button from '../Buttons/Button';

var keyK;

export default class CombatScene extends Phaser.Scene {
  constructor () {
    super('Combat');
  }

  init(data){
    this.previousScene = data.previousScene;
    this.px = data.px;
    this.py = data.py;
    this.weapon1 = data.weapon1;
    console.log("previousScene: " + this.previousScene + " / weapon1: " + this.weapon1);
}

  create () {

    this.text = this.add.text(300, 100, 'Combat!!', { fontSize: 40 });

    var value = Phaser.Math.Between(0, 100);

    if(value <= this.weapon1) {
        this.resultText = this.add.text(150, 150, 'Gagné !!', { fontSize: 24 });
    } else {
        this.resultText = this.add.text(150, 150, 'Perdu !!', { fontSize: 24 });
    }
    
   

    keyK = this.input.keyboard.addKey("K");
  }


  update(time, delta) {
 
    if(keyK.isDown){
        if(this.previousScene != undefined) {
          this.scene.start(this.previousScene, {px: this.px, py: this.py});
        }
    }  
  }

};
