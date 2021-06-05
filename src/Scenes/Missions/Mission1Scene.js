import 'phaser';
import Button from '../../Objects/Button';

export default class Mission1Scene extends Phaser.Scene {
  constructor () {
    super('Mission1');
  }

  create () {

    this.text = this.add.text(300, 100, 'Mission 1', { fontSize: 40 });
    this.mission1Text = this.add.text(250, 190, '- Cartographier la ville d\'Ados\n- Aller dans les maisons 68 et 70', { fontSize: 24 });

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'En Avant !', 'Level0AdosCity');

  }

};
