import 'phaser';

var hud, background, action;

export default class HUD extends Phaser.Scene {
  constructor () {
    super({ key: 'HUD', active: true});
  }

  create () {


        hud = this.add.rectangle( 0, 0, 800, 600, 0xffffff, 1)
                            .setOrigin(0, 0)
                            .setScrollFactor(0)
                            .setDepth(-29);

        hud.setVisible(false);           
        
        this.scene.get('Level0AdosCity').events.on('displayHUD',  function() {
          console.log("displayHUD");
          hud.setVisible(true);
        }, this);

        this.scene.get('Level0AdosCity').events.on('hideHUD',  function() {
          console.log("hideHUD");
          hud.setVisible(false);
        }, this);


      
  }


  update() {

  }
  
}

