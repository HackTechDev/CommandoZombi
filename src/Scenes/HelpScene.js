import 'phaser';
import Button from '../Buttons/Button';

export default class HelpScene extends Phaser.Scene {
  constructor () {
    super('Help');
  }

  create () {

    this.text = this.add.text(300, 100, 'Aide', { fontSize: 40 });
    this.mission1Text = this.add.text(250, 190, '- Déplacement : Touches [Fléchés]\n- Ouvrir une porte : Touche [O]\n- Menu : Touche [M] dans une maison', { fontSize: 24 });

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Menu');
    
  }

};
