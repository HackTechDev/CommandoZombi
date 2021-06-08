import 'phaser';
import Button from '../Buttons/Button';

var keyA;

export default class HelpScene extends Phaser.Scene {
  constructor () {
    super('Help');
  }

  init(data){
    this.previousScene = data.previousScene;

    console.log("previousScene: " + this.previousScene);
}

  create () {

    this.text = this.add.text(300, 100, 'Aide', { fontSize: 40 });
    this.mission1Text = this.add.text(150, 150, '- Se déplacer : Touches [Fléchés]\n- Ouvrir une porte : Touche [O]\n- Accéder la mission : Touche [M] dans une maison\n- Construire/Détruire : Touches [C]/[D]\n- Aide : Touche [A] dans une maison\n- Parler à qqu : [S]\n- Combattre : [K]', { fontSize: 24 });

    if(this.previousScene === undefined) {
      this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Menu');
    }

    keyA = this.input.keyboard.addKey("a");
  }


  update(time, delta) {
 
    if(keyA.isDown){
        if(this.previousScene != undefined) {
          console.log("Aide");
          this.scene.start(this.previousScene);
        }
    }  
  }

};
