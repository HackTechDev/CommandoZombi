/**
 *
 *
 */

export default class Knight {
    constructor(scene, x, y) {
      this.scene = scene;
        

      const anims = scene.anims;
      anims.create({
        key: "knight-left-walk",
        frames: anims.generateFrameNames("atlas_knight", {
          prefix: "knight-left-walk.",
          start: 0,
          end: 3,
          zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "knight-right-walk",
        frames: anims.generateFrameNames("atlas_knight", {
          prefix: "knight-right-walk.",
          start: 0,
          end: 3,
          zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "knight-front-walk",
        frames: anims.generateFrameNames("atlas_knight", {
          prefix: "knight-front-walk.",
          start: 0,
          end: 3,
          zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "knight-back-walk",
        frames: anims.generateFrameNames("atlas_knight", {
          prefix: "knight-back-walk.",
          start: 0,
          end: 3,
          zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
      });

     this.sprite = scene.physics.add
        .sprite(x, y, "atlas_knight", "knight-front")
        .setSize(30, 40)
        .setOffset(10, 24);

    this.keys = scene.input.keyboard.createCursorKeys();
    this.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyZ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

    this.name = "";
    this.nickname ="";

    this.sex = 1; // Male
    this.age = 40;

    this.job = "sniper";

    this.body = 100;
    this.health = 200;
    this.agility = 100;
    this.force = 100;
    this.dexterity = 100;

    this.intelligence = 100;
    this.knowledge = 100;
    this.charism = 100;

    this.weapon1 = 0;

    }


    freeze() {
        this.sprite.body.moves = false;
    }


    update(time, delta) {
        const keys = this.keys;
        const keyQ = this.keyQ;
        const keyD = this.keyD;
        const keyS = this.keyS;
        const keyZ = this.keyZ;

        const sprite = this.sprite;
        const speed = 175;
        const prevVelocity = sprite.body.velocity.clone();

        sprite.body.setVelocity(0);

        if (keyQ.isDown) {
            if(sprite.x > 0) {
                sprite.body.setVelocityX(-speed);
            }
        } else if (keyD.isDown) {
            if(sprite.x < 4096) {
                sprite.body.setVelocityX(speed);
            }
        }

        if (keyZ.isDown) {
            if(sprite.y > 0) {
                sprite.body.setVelocityY(-speed);
            }
        } else if (keyS.isDown) {
            if(sprite.y < 4096) {
                sprite.body.setVelocityY(speed);
            }
        }

        sprite.body.velocity.normalize().scale(speed);

        if (keyQ.isDown) {
            sprite.anims.play("knight-left-walk", true);
        } else if (keyD.isDown) {
            sprite.anims.play("knight-right-walk", true);
        } else if (keyZ.isDown) {
            sprite.anims.play("knight-back-walk", true);
        } else if (keyS.isDown) {
            sprite.anims.play("knight-front-walk", true);
        } else {
            sprite.anims.stop();

            if (prevVelocity.x < 0) {
                sprite.setTexture("atlas_knight", "knight-left");
            } else if (prevVelocity.x > 0) { 
                sprite.setTexture("atlas_knight", "knight-right");
            } else if (prevVelocity.y < 0) { 
                sprite.setTexture("atlas_knight", "knight-back");
            } else if (prevVelocity.y > 0) {
                sprite.setTexture("atlas_knight", "knight-front");
            }
        }


    }

    destroy() {
        this.sprite.destroy();
    }
}

