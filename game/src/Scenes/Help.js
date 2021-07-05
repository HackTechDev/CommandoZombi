import 'phaser';
import Button from '../Buttons/Button';

var keyA;

export default class Help extends Phaser.Scene {
  constructor () {
    super('Help');
  }

  init(data){
    this.previousScene = data.previousScene;

    console.log("previousScene: " + this.previousScene);
}

  create () {

    this.text = this.add.text(300, 100, 'Aide', { fontSize: 30 });
    this.mission1Text = this.add.text(150, 150, '- Déplacer le soldat : [Fléches]\n- Déplacer le chevalier : [Q]/[S]/[D]/[Z]\n- Ouvrir une porte : [O]\n- Accéder la mission : [M] dans une maison\n- Construire/Détruire : [C]/[D]\n- Aide : Touche [A] dans une maison\n- Parler à qqu : [P]\n- Combattre : [K]\n- Caméra pour le soldat : [B]\n- Caméra pour le chevalier : [N]', { fontSize: 12 });

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
