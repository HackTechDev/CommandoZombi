import 'phaser';
import Button from '../Buttons/Button';

export default class HelpScene extends Phaser.Scene {
  constructor () {
    super('Help');
  }

  create () {

    this.text = this.add.text(300, 100, 'Aide', { fontSize: 40 });
    this.mission1Text = this.add.text(150, 150, '- Se déplacer : Touches [Fléchés]\n- Ouvrir une porte : Touche [O]\n- Accéder au Menu : Touche [M] dans une maison\nou sur la page "Menu" pour retourner \nvers la maison', { fontSize: 24 });

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Menu');
    
  }

};
